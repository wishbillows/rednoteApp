<template>
  <view class="page">
    <!-- 头部 -->
    <view class="profile-header" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="header-actions">
        <uni-icons type="scan" size="22" color="#1a1a1a" />
        <view class="header-right-btns">
          <uni-icons type="shop" size="22" color="#1a1a1a" />
          <uni-icons type="more-filled" size="22" color="#1a1a1a" style="margin-left:16px" />
        </view>
      </view>

      <view class="user-info">
        <view class="avatar-wrap">
          <image src="https://picsum.photos/120/120?random=50" class="user-avatar" mode="aspectFill" />
          <view class="avatar-edit">
            <uni-icons type="camera-filled" size="12" color="#fff" />
          </view>
        </view>
        <text class="user-name">张兄</text>
        <text class="user-id">Wish号：wish_10086</text>

        <view class="user-stats">
          <view class="stat-item">
            <text class="stat-num">128</text>
            <text class="stat-label">关注</text>
          </view>
          <view class="stat-divider" />
          <view class="stat-item">
            <text class="stat-num">3.6万</text>
            <text class="stat-label">粉丝</text>
          </view>
          <view class="stat-divider" />
          <view class="stat-item">
            <text class="stat-num">12.8万</text>
            <text class="stat-label">获赞与收藏</text>
          </view>
        </view>

        <text class="user-bio">分享生活的点滴美好 ✨ | 热爱旅行、美食、穿搭</text>

        <view class="action-buttons">
          <view class="btn-edit" @click="editProfile">编辑个人资料</view>
          <view class="btn-share" @click="shareProfile">
            <uni-icons type="share" size="16" color="#666" />
          </view>
        </view>
      </view>
    </view>

    <!-- Tab + 笔记列表 -->
    <view class="content-area">
      <view class="content-tabs">
        <text
          v-for="(tab, index) in contentTabs"
          :key="index"
          :class="['content-tab', activeContentTab === index ? 'content-tab-active' : '']"
          @click="activeContentTab = index"
        >{{ tab }}</text>
      </view>

      <scroll-view scroll-y class="note-scroll">
        <view class="note-grid">
          <view
            v-for="(note, index) in myNotes"
            :key="index"
            class="note-item"
          >
            <image :src="note.cover" class="note-cover" mode="aspectFill" />
            <view class="note-info">
              <text class="note-title">{{ note.title }}</text>
              <view class="note-stats">
                <uni-icons type="heart-filled" size="12" color="#ff2442" />
                <text class="note-likes">{{ note.likes }}</text>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface NoteCard {
  cover: string
  title: string
  likes: string
}

const statusBarHeight = ref<number>(0)
const contentTabs = ref<string[]>(['笔记', '收藏', '赞过'])
const activeContentTab = ref<number>(0)

const myNotes = ref<NoteCard[]>([
  { cover: 'https://picsum.photos/200/260?random=60', title: '今日穿搭分享', likes: '1.2万' },
  { cover: 'https://picsum.photos/200/240?random=61', title: '周末探店记录', likes: '8600' },
  { cover: 'https://picsum.photos/200/280?random=62', title: '云南旅行vlog', likes: '2.3万' },
  { cover: 'https://picsum.photos/200/250?random=63', title: '护肤日常分享', likes: '5400' },
  { cover: 'https://picsum.photos/200/230?random=64', title: '自制蛋糕教程', likes: '3200' },
  { cover: 'https://picsum.photos/200/270?random=65', title: '秋冬穿搭合集', likes: '9800' },
])

function editProfile(): void {
  uni.showToast({ title: '编辑个人资料', icon: 'none' })
}

function shareProfile(): void {
  uni.showToast({ title: '分享个人主页', icon: 'none' })
}

onMounted(() => {
  const info = uni.getSystemInfoSync()
  statusBarHeight.value = info.statusBarHeight ?? 0
})
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.profile-header {
  background: linear-gradient(180deg, #ffe8ec 0%, #fff5f7 60%, #f5f5f5 100%);
}

.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
}

.header-right-btns {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px;
}

.avatar-wrap {
  position: relative;
  margin-bottom: 10px;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  box-shadow: 0 4px 16px rgba(255, 36, 66, 0.2);
}

.avatar-edit {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  background-color: #ff2442;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
}

.user-name {
  font-size: 20px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.user-id {
  font-size: 12px;
  color: #999999;
  margin-bottom: 16px;
}

.user-stats {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 12px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.stat-num {
  font-size: 18px;
  font-weight: 800;
  color: #1a1a1a;
}

.stat-label {
  font-size: 11px;
  color: #999999;
}

.stat-divider {
  width: 1px;
  height: 24px;
  background-color: #e0e0e0;
}

.user-bio {
  font-size: 13px;
  color: #666666;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 14px;
}

.action-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
}

.btn-edit {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 28px;
  border-radius: 20px;
  &:active { background-color: #f5f5f5; }
}

.btn-share {
  width: 36px;
  height: 36px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active { background-color: #f5f5f5; }
}

.content-area {
  flex: 1;
  background-color: #ffffff;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.content-tabs {
  display: flex;
  border-bottom: 1px solid #f5f5f5;
}

.content-tab {
  flex: 1;
  text-align: center;
  padding: 14px 0;
  font-size: 14px;
  color: #999999;
  position: relative;
}

.content-tab-active {
  color: #1a1a1a;
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 3px;
    background-color: #ff2442;
    border-radius: 2px;
  }
}

.note-scroll {
  flex: 1;
}

.note-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}

.note-item {
  position: relative;
  aspect-ratio: 3/4;
  &:active { opacity: 0.9; }
}

.note-cover {
  width: 100%;
  height: 100%;
}

.note-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4));
  padding: 16px 6px 6px;
}

.note-title {
  font-size: 11px;
  color: #ffffff;
  display: block;
  margin-bottom: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.note-stats {
  display: flex;
  align-items: center;
  gap: 3px;
}

.note-likes {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.9);
}
</style>
