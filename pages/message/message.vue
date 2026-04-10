<template>
  <view class="page">
    <view class="header" :style="{ paddingTop: statusBarHeight + 'px' }">
      <text class="header-title">消息</text>
      <uni-icons type="settings" size="22" color="#1a1a1a" />
    </view>

    <scroll-view scroll-y class="content" :style="{ top: headerHeight + 'px' }">
      <!-- 通知汇总 -->
      <view class="notice-row">
        <view
          v-for="(notice, index) in notices"
          :key="index"
          class="notice-item"
          @click="goNotice(notice)"
        >
          <view class="notice-icon" :style="{ backgroundColor: notice.bg }">
            <text class="notice-emoji">{{ notice.icon }}</text>
            <view class="notice-badge" v-if="notice.count > 0">
              <text class="badge-text">{{ notice.count > 99 ? '99+' : notice.count }}</text>
            </view>
          </view>
          <text class="notice-label">{{ notice.label }}</text>
        </view>
      </view>

      <!-- 私信列表 -->
      <text class="section-label">私信</text>
      <view class="chat-list">
        <view
          v-for="(chat, index) in chatList"
          :key="index"
          class="chat-item"
          @click="openChat(chat)"
        >
          <view class="chat-avatar-wrap">
            <image :src="chat.avatar" class="chat-avatar" mode="aspectFill" />
            <view class="online-dot" v-if="chat.online" />
          </view>
          <view class="chat-info">
            <view class="chat-name-row">
              <text class="chat-name">{{ chat.name }}</text>
              <text class="chat-time">{{ chat.time }}</text>
            </view>
            <view class="chat-preview-row">
              <text class="chat-preview">{{ chat.lastMsg }}</text>
              <view class="unread-badge" v-if="chat.unread > 0">
                <text class="unread-text">{{ chat.unread }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface NoticeItem {
  label: string
  icon: string
  bg: string
  count: number
}

interface ChatItem {
  name: string
  avatar: string
  lastMsg: string
  time: string
  unread: number
  online: boolean
}

const statusBarHeight = ref<number>(0)
const headerHeight = ref<number>(88)

const notices = ref<NoticeItem[]>([
  { label: '赞和收藏', icon: '❤️', bg: '#fff0f3', count: 12 },
  { label: '评论', icon: '💬', bg: '#e8f5ff', count: 3 },
  { label: '@我', icon: '📣', bg: '#fff5e0', count: 0 },
  { label: '关注', icon: '👥', bg: '#e8f5e9', count: 5 },
])

const chatList = ref<ChatItem[]>([
  { name: '小红薯er', avatar: 'https://picsum.photos/60/60?random=30', lastMsg: '哇这个穿搭超好看！求链接～', time: '刚刚', unread: 2, online: true },
  { name: '旅行达人', avatar: 'https://picsum.photos/60/60?random=31', lastMsg: '大理真的很好玩，强烈推荐！', time: '10分钟前', unread: 0, online: false },
  { name: '美食探店', avatar: 'https://picsum.photos/60/60?random=32', lastMsg: '那家店最近出了新品，你要去试吗', time: '1小时前', unread: 1, online: true },
  { name: '生活美学家', avatar: 'https://picsum.photos/60/60?random=33', lastMsg: '[图片]', time: '昨天', unread: 0, online: false },
  { name: '时尚博主', avatar: 'https://picsum.photos/60/60?random=34', lastMsg: '谢谢你的点赞和收藏～', time: '昨天', unread: 0, online: false },
])

function goNotice(notice: NoticeItem): void {
  notice.count = 0
  uni.showToast({ title: `查看${notice.label}通知`, icon: 'none' })
}

function openChat(chat: ChatItem): void {
  chat.unread = 0
  uni.showToast({ title: `打开与${chat.name}的对话`, icon: 'none' })
}

onMounted(() => {
  const info = uni.getSystemInfoSync()
  statusBarHeight.value = info.statusBarHeight ?? 0
  headerHeight.value = (info.statusBarHeight ?? 0) + 44
})
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  position: relative;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  padding-bottom: 10px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
}

.header-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
}

.content {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.notice-row {
  display: flex;
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 10px;
  justify-content: space-around;
}

.notice-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  &:active { opacity: 0.7; }
}

.notice-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.notice-emoji {
  font-size: 22px;
}

.notice-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: #ff2442;
  border-radius: 10px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}

.badge-text {
  font-size: 10px;
  color: #ffffff;
  font-weight: 700;
}

.notice-label {
  font-size: 12px;
  color: #666666;
}

.section-label {
  font-size: 13px;
  color: #999999;
  padding: 10px 16px 6px;
  display: block;
}

.chat-list {
  background-color: #ffffff;
}

.chat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid #f5f5f5;
  &:last-child { border-bottom: none; }
  &:active { background-color: #f9f9f9; }
}

.chat-avatar-wrap {
  position: relative;
  flex-shrink: 0;
}

.chat-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.online-dot {
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 12px;
  height: 12px;
  background-color: #4cd964;
  border-radius: 50%;
  border: 2px solid #ffffff;
}

.chat-info {
  flex: 1;
  overflow: hidden;
}

.chat-name-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.chat-name {
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
}

.chat-time {
  font-size: 11px;
  color: #999999;
}

.chat-preview-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-preview {
  font-size: 13px;
  color: #999999;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.unread-badge {
  background-color: #ff2442;
  border-radius: 10px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  margin-left: 8px;
  flex-shrink: 0;
}

.unread-text {
  font-size: 10px;
  color: #ffffff;
  font-weight: 700;
}
</style>
