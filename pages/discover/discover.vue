<template>
  <view class="page">
    <!-- 搜索栏 -->
    <view class="search-header" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="search-bar">
        <uni-icons type="search" size="16" color="#999" />
        <input
          class="search-input"
          v-model="keyword"
          placeholder="搜索感兴趣的内容"
          placeholder-style="color:#bbb;font-size:14px"
          @confirm="doSearch"
        />
        <uni-icons v-if="keyword" type="clear" size="16" color="#999" @click="clearKeyword" />
      </view>
      <text class="search-btn" @click="doSearch">搜索</text>
    </view>

    <scroll-view scroll-y class="content" :style="{ top: searchHeaderHeight + 'px' }">
      <!-- 热搜榜 -->
      <view class="section">
        <view class="section-header">
          <text class="section-title">🔥 热搜榜</text>
          <text class="section-more" @click="refreshHot">换一批</text>
        </view>
        <view class="hot-list">
          <view
            v-for="(item, index) in hotList"
            :key="index"
            class="hot-item"
            @click="searchByTag(item.text)"
          >
            <text :class="['hot-rank', index < 3 ? 'hot-rank-top' : '']">{{ index + 1 }}</text>
            <view class="hot-info">
              <text class="hot-text">{{ item.text }}</text>
              <text class="hot-count">{{ item.count }}</text>
            </view>
            <uni-tag v-if="item.tag" :text="item.tag" :type="item.tagType" size="small" />
          </view>
        </view>
      </view>

      <!-- 分类 -->
      <view class="section">
        <view class="section-header">
          <text class="section-title">✨ 发现好内容</text>
        </view>
        <view class="category-grid">
          <view
            v-for="(cat, index) in categories"
            :key="index"
            class="category-item"
            :style="{ backgroundColor: cat.bg }"
            @click="selectCategory(cat)"
          >
            <text class="category-icon">{{ cat.icon }}</text>
            <text class="category-name">{{ cat.name }}</text>
          </view>
        </view>
      </view>

      <!-- 热门话题 -->
      <view class="section">
        <view class="section-header">
          <text class="section-title">💬 热门话题</text>
        </view>
        <view class="topic-list">
          <view
            v-for="(topic, index) in topics"
            :key="index"
            class="topic-item"
            @click="searchByTag(topic.title)"
          >
            <image :src="topic.cover" class="topic-cover" mode="aspectFill" />
            <view class="topic-info">
              <text class="topic-title">#{{ topic.title }}</text>
              <text class="topic-count">{{ topic.count }}篇笔记</text>
            </view>
            <uni-icons type="right" size="14" color="#ccc" />
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface HotItem {
  text: string
  count: string
  tag: string
  tagType: string
}

interface Category {
  name: string
  icon: string
  bg: string
}

interface Topic {
  title: string
  count: string
  cover: string
}

const statusBarHeight = ref<number>(0)
const searchHeaderHeight = ref<number>(80)
const keyword = ref<string>('')

const hotList = ref<HotItem[]>([
  { text: '夏日穿搭分享', count: '2.8亿', tag: '热', tagType: 'error' },
  { text: '旅行打卡好去处', count: '1.5亿', tag: '新', tagType: 'success' },
  { text: '自制美食教程', count: '1.2亿', tag: '', tagType: '' },
  { text: '护肤品测评分享', count: '9800万', tag: '', tagType: '' },
  { text: '健身减脂打卡', count: '8600万', tag: '', tagType: '' },
  { text: '租房改造小技巧', count: '7200万', tag: '', tagType: '' },
  { text: '好书推荐', count: '5400万', tag: '', tagType: '' },
  { text: '宠物日常记录', count: '4100万', tag: '', tagType: '' },
])

const categories = ref<Category[]>([
  { name: '穿搭', icon: '👗', bg: '#fff0f3' },
  { name: '美食', icon: '🍜', bg: '#fff5e0' },
  { name: '旅行', icon: '✈️', bg: '#e8f5ff' },
  { name: '美妆', icon: '💄', bg: '#fce4ec' },
  { name: '健身', icon: '💪', bg: '#e8f5e9' },
  { name: '家居', icon: '🏠', bg: '#f3e5f5' },
  { name: '读书', icon: '📚', bg: '#e0f2f1' },
  { name: '宠物', icon: '🐱', bg: '#fff3e0' },
])

const topics = ref<Topic[]>([
  { title: '夏日穿搭', count: '156万', cover: 'https://picsum.photos/80/80?random=20' },
  { title: '探店日记', count: '98万', cover: 'https://picsum.photos/80/80?random=21' },
  { title: '旅行攻略', count: '234万', cover: 'https://picsum.photos/80/80?random=22' },
  { title: '素颜护肤', count: '67万', cover: 'https://picsum.photos/80/80?random=23' },
  { title: '健康饮食', count: '112万', cover: 'https://picsum.photos/80/80?random=24' },
])

function doSearch(): void {
  if (!keyword.value.trim()) {
    uni.showToast({ title: '请输入搜索内容', icon: 'none' })
    return
  }
  uni.showToast({ title: `搜索：${keyword.value}`, icon: 'none' })
}

function clearKeyword(): void {
  keyword.value = ''
}

function refreshHot(): void {
  uni.showToast({ title: '已刷新', icon: 'success' })
}

function searchByTag(text: string): void {
  keyword.value = text
  doSearch()
}

function selectCategory(cat: Category): void {
  uni.showToast({ title: `进入${cat.name}分类`, icon: 'none' })
}

onMounted(() => {
  const info = uni.getSystemInfoSync()
  statusBarHeight.value = info.statusBarHeight ?? 0
  searchHeaderHeight.value = (info.statusBarHeight ?? 0) + 56
})
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  position: relative;
}

.search-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
}

.search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 8px 14px;
  gap: 8px;
}

.search-input {
  flex: 1;
  font-size: 14px;
  color: #1a1a1a;
  background: transparent;
}

.search-btn {
  font-size: 15px;
  color: #ff2442;
  font-weight: 600;
  white-space: nowrap;
}

.content {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.section {
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 16px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.section-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
}

.section-more {
  font-size: 13px;
  color: #ff2442;
}

.hot-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.hot-item {
  display: flex;
  align-items: center;
  gap: 14px;
  &:active { opacity: 0.7; }
}

.hot-rank {
  width: 20px;
  font-size: 15px;
  font-weight: 700;
  color: #cccccc;
  text-align: center;
  flex-shrink: 0;
}

.hot-rank-top {
  color: #ff2442;
}

.hot-info {
  flex: 1;
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.hot-text {
  font-size: 14px;
  color: #1a1a1a;
}

.hot-count {
  font-size: 11px;
  color: #999999;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 8px;
  border-radius: 12px;
  gap: 6px;
  &:active { opacity: 0.8; transform: scale(0.95); }
}

.category-icon {
  font-size: 24px;
}

.category-name {
  font-size: 12px;
  color: #1a1a1a;
  font-weight: 500;
}

.topic-list {
  display: flex;
  flex-direction: column;
}

.topic-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #f5f5f5;
  &:last-child { border-bottom: none; }
  &:active { opacity: 0.7; }
}

.topic-cover {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  flex-shrink: 0;
}

.topic-info {
  flex: 1;
}

.topic-title {
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  display: block;
  margin-bottom: 4px;
}

.topic-count {
  font-size: 12px;
  color: #999999;
}
</style>
