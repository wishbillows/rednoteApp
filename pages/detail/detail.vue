<template>
  <view class="page">
    <!-- 图片轮播 -->
    <swiper
      class="cover-swiper"
      :indicator-dots="true"
      indicator-color="rgba(255,255,255,0.5)"
      indicator-active-color="#ffffff"
      circular
    >
      <swiper-item v-for="(img, index) in images" :key="index">
        <image :src="img" class="cover-image" mode="aspectFill" />
      </swiper-item>
    </swiper>

    <!-- 返回 -->
    <view class="back-btn" :style="{ top: (statusBarHeight + 10) + 'px' }" @click="goBack">
      <uni-icons type="left" size="20" color="#ffffff" />
    </view>
    <!-- 更多 -->
    <view class="more-btn" :style="{ top: (statusBarHeight + 10) + 'px' }" @click="showMore">
      <uni-icons type="more-filled" size="20" color="#ffffff" />
    </view>

    <!-- 内容卡片 -->
    <view class="content-card">
      <text class="note-title">{{ title }}</text>

      <view class="tags-row">
        <text class="tag" @click="searchTag('穿搭分享')">#穿搭分享</text>
        <text class="tag" @click="searchTag('生活记录')">#生活记录</text>
      </view>

      <view class="author-row">
        <image :src="avatar" class="author-avatar" mode="aspectFill" />
        <text class="author-name">{{ author }}</text>
        <view class="follow-btn" @click="toggleFollow">
          <text class="follow-text">{{ isFollowed ? '已关注' : '+ 关注' }}</text>
        </view>
      </view>

      <view class="divider" />

      <text class="note-content">这是一篇分享内容的笔记，记录了生活中美好的点点滴滴。希望大家都能在日常生活中发现美好，保持积极乐观的心态。喜欢这篇笔记的朋友记得点赞收藏哦！💕</text>
      <text class="post-time">2024-03-25 · 北京</text>

      <!-- 评论区 -->
      <view class="comments-section">
        <text class="comments-title">{{ comments.length }}条评论</text>
        <view v-for="(comment, index) in comments" :key="index" class="comment-item">
          <image :src="comment.avatar" class="comment-avatar" mode="aspectFill" />
          <view class="comment-body">
            <text class="comment-name">{{ comment.name }}</text>
            <text class="comment-text">{{ comment.text }}</text>
            <view class="comment-footer">
              <text class="comment-time">{{ comment.time }}</text>
              <view class="comment-like" @click="toggleCommentLike(comment)">
                <uni-icons
                  :type="comment.liked ? 'heart-filled' : 'heart'"
                  size="12"
                  :color="comment.liked ? '#ff2442' : '#ccc'"
                />
                <text class="comment-like-count">{{ comment.likes }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部操作栏 -->
    <view class="bottom-bar">
      <view class="comment-input" @click="openComment">
        <text class="comment-placeholder">说点什么...</text>
      </view>
      <view class="bottom-actions">
        <view class="action-item" @click="toggleLike">
          <uni-icons
            :type="isLiked ? 'heart-filled' : 'heart'"
            size="24"
            :color="isLiked ? '#ff2442' : '#666'"
          />
          <text :class="['action-count', isLiked ? 'action-count-red' : '']">{{ likeCount }}</text>
        </view>
        <view class="action-item" @click="toggleCollect">
          <uni-icons
            :type="isCollected ? 'star-filled' : 'star'"
            size="24"
            :color="isCollected ? '#ff9500' : '#666'"
          />
          <text class="action-count">{{ collectCount }}</text>
        </view>
        <view class="action-item" @click="openComment">
          <uni-icons type="chat" size="24" color="#666" />
          <text class="action-count">{{ comments.length }}</text>
        </view>
        <view class="action-item" @click="shareNote">
          <uni-icons type="redo" size="24" color="#666" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface CommentItem {
  name: string
  avatar: string
  text: string
  time: string
  likes: number
  liked: boolean
}

// 路由参数
const options = ref<Record<string, string>>({})

const statusBarHeight = ref<number>(0)
const title = ref<string>('')
const cover = ref<string>('')
const author = ref<string>('')
const avatar = ref<string>('')
const likeCount = ref<number>(0)
const collectCount = ref<number>(0)
const images = ref<string[]>([])

const isFollowed = ref<boolean>(false)
const isLiked = ref<boolean>(false)
const isCollected = ref<boolean>(false)

const comments = ref<CommentItem[]>([
  { name: '生活美学家', avatar: 'https://picsum.photos/60/60?random=40', text: '太美了！求问在哪里拍的呀？', time: '1小时前', likes: 128, liked: false },
  { name: '旅行达人', avatar: 'https://picsum.photos/60/60?random=41', text: '哇好喜欢这个风格👍', time: '2小时前', likes: 66, liked: false },
  { name: '美食探店', avatar: 'https://picsum.photos/60/60?random=42', text: '分享更多吧！已关注～', time: '3小时前', likes: 32, liked: false },
])

function goBack(): void {
  uni.navigateBack()
}

function showMore(): void {
  uni.showActionSheet({
    itemList: ['举报', '不感兴趣', '复制链接'],
    success: () => {},
  })
}

function toggleFollow(): void {
  isFollowed.value = !isFollowed.value
  uni.showToast({ title: isFollowed.value ? '关注成功' : '已取消关注', icon: 'success' })
}

function toggleLike(): void {
  isLiked.value = !isLiked.value
  likeCount.value += isLiked.value ? 1 : -1
}

function toggleCollect(): void {
  isCollected.value = !isCollected.value
  collectCount.value += isCollected.value ? 1 : -1
}

function openComment(): void {
  uni.showToast({ title: '评论功能开发中', icon: 'none' })
}

function shareNote(): void {
  uni.showToast({ title: '分享笔记', icon: 'none' })
}

function searchTag(tag: string): void {
  uni.showToast({ title: `搜索：${tag}`, icon: 'none' })
}

function toggleCommentLike(comment: CommentItem): void {
  comment.liked = !comment.liked
  comment.likes += comment.liked ? 1 : -1
}

onMounted(() => {
  const info = uni.getSystemInfoSync()
  statusBarHeight.value = info.statusBarHeight ?? 0

  // 获取页面参数
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1] as any
  const query = currentPage?.options ?? {}

  title.value = decodeURIComponent(query.title || '分享一下生活')
  cover.value = decodeURIComponent(query.cover || 'https://picsum.photos/400/500?random=1')
  author.value = decodeURIComponent(query.author || '小红薯er')
  avatar.value = decodeURIComponent(query.avatar || 'https://picsum.photos/60/60?random=11')
  likeCount.value = parseInt(query.likes || '1000')
  collectCount.value = Math.floor(likeCount.value * 0.6)

  images.value = [
    cover.value,
    `https://picsum.photos/400/500?random=${Math.floor(Math.random() * 100) + 1}`,
    `https://picsum.photos/400/500?random=${Math.floor(Math.random() * 100) + 50}`,
  ]
})
</script>

<style lang="scss">
.page {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 70px;
}

.cover-swiper {
  width: 100%;
  height: 480rpx;
}

.cover-image {
  width: 100%;
  height: 100%;
}

.back-btn, .more-btn {
  position: fixed;
  width: 36px;
  height: 36px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.back-btn { left: 16px; }
.more-btn { right: 16px; }

.content-card {
  background-color: #ffffff;
  border-radius: 16px 16px 0 0;
  margin-top: -16px;
  padding: 20px 16px;
}

.note-title {
  font-size: 18px;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.4;
  display: block;
  margin-bottom: 10px;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  font-size: 13px;
  color: #ff2442;
  background-color: #fff0f3;
  padding: 3px 10px;
  border-radius: 12px;
}

.author-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.author-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.author-name {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
}

.follow-btn {
  border: 1px solid #ff2442;
  border-radius: 16px;
  padding: 4px 14px;
}

.follow-text {
  font-size: 13px;
  color: #ff2442;
  font-weight: 600;
}

.divider {
  height: 1px;
  background-color: #f5f5f5;
  margin-bottom: 16px;
}

.note-content {
  font-size: 15px;
  color: #333333;
  line-height: 1.7;
  display: block;
  margin-bottom: 10px;
}

.post-time {
  font-size: 12px;
  color: #999999;
  display: block;
  margin-bottom: 20px;
}

.comments-section {
  border-top: 1px solid #f5f5f5;
  padding-top: 16px;
}

.comments-title {
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  display: block;
  margin-bottom: 16px;
}

.comment-item {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

.comment-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  flex-shrink: 0;
}

.comment-body {
  flex: 1;
}

.comment-name {
  font-size: 13px;
  font-weight: 600;
  color: #666666;
  display: block;
  margin-bottom: 4px;
}

.comment-text {
  font-size: 14px;
  color: #1a1a1a;
  line-height: 1.5;
  display: block;
  margin-bottom: 6px;
}

.comment-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment-time {
  font-size: 11px;
  color: #999999;
}

.comment-like {
  display: flex;
  align-items: center;
  gap: 3px;
}

.comment-like-count {
  font-size: 11px;
  color: #999999;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #ffffff;
  border-top: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
}

.comment-input {
  flex: 1;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 8px 16px;
}

.comment-placeholder {
  font-size: 14px;
  color: #bbbbbb;
}

.bottom-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.action-count {
  font-size: 10px;
  color: #666666;
}

.action-count-red {
  color: #ff2442;
}
</style>
