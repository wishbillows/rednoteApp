<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="navbar" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="navbar-left">
        <text class="brand-name">Wish</text>
      </view>
      <view class="navbar-tabs">
        <text
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['tab-item', activeTab === index ? 'tab-active' : '']"
          @click="switchTab(index)"
        >{{ tab }}</text>
      </view>
      <view class="navbar-right">
        <uni-icons type="search" size="22" color="#1a1a1a" @click="goSearch" />
      </view>
    </view>

    <!-- 瀑布流内容 -->
    <scroll-view
      scroll-y
      class="content"
      :style="{ top: navbarHeight + 'px' }"
      refresher-enabled
      :refresher-triggered="isRefreshing"
      @refresherrefresh="onRefresh"
      @scrolltolower="onLoadMore"
    >
      <view class="waterfall">
        <!-- 左列 -->
        <view class="waterfall-col">
          <view
            v-for="item in leftList"
            :key="item.id"
            class="card"
            @click="goDetail(item)"
          >
            <image
              :src="item.cover"
              class="card-img"
              :style="{ height: item.imgHeight + 'px' }"
              mode="aspectFill"
            />
            <view class="card-body">
              <text class="card-title">{{ item.title }}</text>
              <view class="card-footer">
                <view class="author-info">
                  <image :src="item.avatar" class="avatar" mode="aspectFill" />
                  <text class="author-name">{{ item.author }}</text>
                </view>
                <view class="like-info" @click.stop="toggleLike(item)">
                  <uni-icons
                    :type="item.liked ? 'heart-filled' : 'heart'"
                    size="14"
                    :color="item.liked ? '#ff2442' : '#999'"
                  />
                  <text class="like-count">{{ item.likes }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>

        <!-- 右列 -->
        <view class="waterfall-col">
          <view
            v-for="item in rightList"
            :key="item.id"
            class="card"
            @click="goDetail(item)"
          >
            <image
              :src="item.cover"
              class="card-img"
              :style="{ height: item.imgHeight + 'px' }"
              mode="aspectFill"
            />
            <view class="card-body">
              <text class="card-title">{{ item.title }}</text>
              <view class="card-footer">
                <view class="author-info">
                  <image :src="item.avatar" class="avatar" mode="aspectFill" />
                  <text class="author-name">{{ item.author }}</text>
                </view>
                <view class="like-info" @click.stop="toggleLike(item)">
                  <uni-icons
                    :type="item.liked ? 'heart-filled' : 'heart'"
                    size="14"
                    :color="item.liked ? '#ff2442' : '#999'"
                  />
                  <text class="like-count">{{ item.likes }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>

      <uni-load-more :status="loadMoreStatus" />
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface NoteItem {
  id: number
  cover: string
  imgHeight: number
  title: string
  author: string
  avatar: string
  likes: number
  liked: boolean
}

type LoadMoreStatus = 'more' | 'loading' | 'noMore'

const mockCovers = [
  'https://picsum.photos/300/400?random=1',
  'https://picsum.photos/300/500?random=2',
  'https://picsum.photos/300/380?random=3',
  'https://picsum.photos/300/450?random=4',
  'https://picsum.photos/300/420?random=5',
  'https://picsum.photos/300/480?random=6',
  'https://picsum.photos/300/360?random=7',
  'https://picsum.photos/300/520?random=8',
  'https://picsum.photos/300/400?random=9',
  'https://picsum.photos/300/440?random=10',
]
const mockAvatars = [
  'https://picsum.photos/60/60?random=11',
  'https://picsum.photos/60/60?random=12',
  'https://picsum.photos/60/60?random=13',
  'https://picsum.photos/60/60?random=14',
  'https://picsum.photos/60/60?random=15',
]
const mockTitles = [
  '今天的穿搭超级好看！分享给大家～',
  '发现一家隐藏的宝藏咖啡馆☕',
  '周末去了这个小众景点，人少景美',
  '自制抹茶蛋糕，做法超简单！',
  '护肤品测评 | 这款真的很好用',
  '旅行vlog | 云南大理3日游',
  '健身打卡第30天，变化很大！',
  '租房改造，1000元让家变美',
  '最近在看的好书推荐',
  '夏日美甲新花样，自己做的！',
]
const mockAuthors = ['小红薯er', '生活美学家', '旅行达人', '美食探店', '时尚博主']
const imgHeights = [180, 220, 200, 240, 190, 210, 230, 180, 250, 200]

function generateMockData(startId: number = 1, count: number = 10): NoteItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    cover: mockCovers[i % mockCovers.length],
    imgHeight: imgHeights[i % imgHeights.length],
    title: mockTitles[i % mockTitles.length],
    author: mockAuthors[i % mockAuthors.length],
    avatar: mockAvatars[i % mockAvatars.length],
    likes: Math.floor(Math.random() * 5000) + 100,
    liked: false,
  }))
}

// 状态
const statusBarHeight = ref<number>(0)
const navbarHeight = ref<number>(88)
const tabs = ref<string[]>(['关注', '推荐', '附近'])
const activeTab = ref<number>(1)
const leftList = ref<NoteItem[]>([])
const rightList = ref<NoteItem[]>([])
const isRefreshing = ref<boolean>(false)
const loadMoreStatus = ref<LoadMoreStatus>('more')
const page = ref<number>(1)

function loadData(): void {
  const newData = generateMockData(page.value * 10 - 9, 10)
  newData.forEach((item, index) => {
    if (index % 2 === 0) {
      leftList.value.push(item)
    } else {
      rightList.value.push(item)
    }
  })
}

function switchTab(index: number): void {
  activeTab.value = index
  page.value = 1
  leftList.value = []
  rightList.value = []
  loadData()
}

function onRefresh(): void {
	console.log('进入瀑布流数据添加')
  isRefreshing.value = true
  page.value = 1
  leftList.value = []
  rightList.value = []
  setTimeout(() => {
    loadData()
    isRefreshing.value = false
  }, 1000)
}

function onLoadMore(): void {
	console.log("进入瀑布流数据添加1")
  if (loadMoreStatus.value === 'loading') return
  loadMoreStatus.value = 'loading'
  page.value++
  setTimeout(() => {
    loadData()
    loadMoreStatus.value = 'more'
  }, 800)
}

function toggleLike(item: NoteItem): void {
  item.liked = !item.liked
  item.likes += item.liked ? 1 : -1
}

function goSearch(): void {
  uni.switchTab({ url: '/pages/discover/discover' })
}

function goDetail(item: NoteItem): void {
  uni.navigateTo({
    url: `/pages/detail/detail?id=${item.id}&title=${encodeURIComponent(item.title)}&cover=${encodeURIComponent(item.cover)}&author=${encodeURIComponent(item.author)}&avatar=${encodeURIComponent(item.avatar)}&likes=${item.likes}`
  })
}

onMounted(() => {
  const info = uni.getSystemInfoSync()
  statusBarHeight.value = info.statusBarHeight ?? 0
  navbarHeight.value = (info.statusBarHeight ?? 0) + 44
  loadData()
})
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  position: relative;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 16px;
  padding-bottom: 10px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
}

.navbar-left {
  flex: 0 0 auto;
}

.brand-name {
  font-size: 20px;
  font-weight: 800;
  color: #ff2442;
  letter-spacing: -0.5px;
}

.navbar-tabs {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.tab-item {
  font-size: 15px;
  color: #999999;
  padding: 4px 0;
  position: relative;
}

.tab-active {
  color: #1a1a1a;
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 3px;
    background-color: #ff2442;
    border-radius: 2px;
  }
}

.navbar-right {
  flex: 0 0 auto;
}

.content {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.waterfall {
  display: flex;
  gap: 8px;
  padding: 10px 8px;
}

.waterfall-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  &:active {
    opacity: 0.9;
    transform: scale(0.98);
  }
}

.card-img {
  width: 100%;
  display: block;
}

.card-body {
  padding: 8px 10px 10px;
}

.card-title {
  font-size: 13px;
  color: #1a1a1a;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

.author-info {
  display: flex;
  align-items: center;
  flex: 1;
  overflow: hidden;
}

.avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  flex-shrink: 0;
}

.author-name {
  font-size: 11px;
  color: #999999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.like-info {
  display: flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
}

.like-count {
  font-size: 11px;
  color: #999999;
}
</style>
