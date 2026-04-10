<template>
  <view class="page">
    <view class="header" :style="{ paddingTop: statusBarHeight + 'px' }">
      <text class="header-cancel" @click="goBack">取消</text>
      <text class="header-title">发布笔记</text>
      <text class="header-publish" @click="onPublish">发布</text>
    </view>

    <scroll-view scroll-y class="content" :style="{ top: headerHeight + 'px' }">
      <!-- 图片选择 -->
      <view class="media-section">
        <view class="media-grid">
          <view v-for="(img, index) in selectedImages" :key="index" class="media-item">
            <image :src="img" class="media-thumb" mode="aspectFill" />
            <view class="media-delete" @click="removeImage(index)">
              <uni-icons type="closeempty" size="12" color="#fff" />
            </view>
          </view>
          <view v-if="selectedImages.length < 9" class="media-add" @click="chooseImage">
            <uni-icons type="camera" size="30" color="#cccccc" />
            <text class="media-add-text">{{ selectedImages.length }}/9</text>
          </view>
        </view>
      </view>

      <!-- 标题与内容 -->
      <view class="form-section">
        <input
          class="title-input"
          v-model="form.title"
          placeholder="填写标题会有更多赞哦～"
          placeholder-style="color:#bbb;font-size:16px"
          :maxlength="20"
        />
        <view class="title-count">{{ form.title.length }}/20</view>
        <textarea
          class="content-input"
          v-model="form.content"
          placeholder="分享这一刻的想法..."
          placeholder-style="color:#bbb;font-size:14px"
          :maxlength="500"
          auto-height
        />
        <view class="content-count">{{ form.content.length }}/500</view>
      </view>

      <!-- 话题标签 -->
      <view class="tag-section">
        <view class="tag-header" @click="addTopic">
          <uni-icons type="compose" size="16" color="#ff2442" />
          <text class="tag-text">添加话题</text>
        </view>
        <view class="selected-tags">
          <view v-for="(tag, index) in form.tags" :key="index" class="tag-chip">
            <text class="tag-chip-text">#{{ tag }}</text>
            <uni-icons type="closeempty" size="10" color="#ff2442" @click="removeTag(index)" />
          </view>
        </view>
      </view>

      <!-- 设置项 -->
      <view class="settings-section">
        <view class="setting-item" @click="selectLocation">
          <uni-icons type="location" size="18" color="#666" />
          <text class="setting-label">{{ form.location || '添加地点' }}</text>
          <uni-icons type="right" size="14" color="#ccc" />
        </view>
        <view class="setting-item">
          <uni-icons type="person" size="18" color="#666" />
          <text class="setting-label">谁可以看</text>
          <view class="setting-right">
            <text class="setting-value">{{ form.visibility }}</text>
            <uni-icons type="right" size="14" color="#ccc" />
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

interface PublishForm {
  title: string
  content: string
  tags: string[]
  location: string
  visibility: string
}

const statusBarHeight = ref<number>(0)
const headerHeight = ref<number>(88)
const selectedImages = ref<string[]>([])

const form = reactive<PublishForm>({
  title: '',
  content: '',
  tags: ['穿搭分享', '生活记录'],
  location: '',
  visibility: '公开',
})

const popularTags = ['穿搭分享', '美食探店', '旅行打卡', '护肤分享', '健身日记', '好书推荐']

function goBack(): void {
  uni.switchTab({ url: '/pages/index/index' })
}

function chooseImage(): void {
  const remaining = 9 - selectedImages.value.length
  uni.chooseImage({
    count: remaining,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success: (res) => {
      selectedImages.value = [...selectedImages.value, ...res.tempFilePaths]
    },
  })
}

function removeImage(index: number): void {
  selectedImages.value.splice(index, 1)
}

function addTopic(): void {
  const unused = popularTags.filter((t) => !form.tags.includes(t))
  if (unused.length > 0) {
    form.tags.push(unused[0])
  } else {
    uni.showToast({ title: '话题已添加完', icon: 'none' })
  }
}

function removeTag(index: number): void {
  form.tags.splice(index, 1)
}

function selectLocation(): void {
  const locations = ['北京·三里屯', '上海·外滩', '成都·春熙路', '杭州·西湖']
  form.location = locations[Math.floor(Math.random() * locations.length)]
}

function onPublish(): void {
  if (!form.title && !form.content && selectedImages.value.length === 0) {
    uni.showToast({ title: '请添加内容后发布', icon: 'none' })
    return
  }
  uni.showLoading({ title: '发布中...' })
  setTimeout(() => {
    uni.hideLoading()
    uni.showToast({ title: '发布成功！', icon: 'success' })
    setTimeout(() => {
      uni.switchTab({ url: '/pages/index/index' })
    }, 1500)
  }, 1500)
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
  background-color: #ffffff;
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
  border-bottom: 1px solid #f5f5f5;
}

.header-cancel {
  font-size: 15px;
  color: #666666;
  padding: 8px 0;
}

.header-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
}

.header-publish {
  font-size: 15px;
  color: #ffffff;
  background-color: #ff2442;
  padding: 6px 16px;
  border-radius: 20px;
  font-weight: 600;
}

.content {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.media-section {
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
}

.media-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.media-item {
  position: relative;
  width: calc(33.33% - 6px);
  aspect-ratio: 1;
}

.media-thumb {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.media-delete {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-add {
  width: calc(33.33% - 6px);
  aspect-ratio: 1;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  &:active { opacity: 0.7; }
}

.media-add-text {
  font-size: 12px;
  color: #cccccc;
}

.form-section {
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
}

.title-input {
  font-size: 18px;
  color: #1a1a1a;
  font-weight: 600;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: 12px;
}

.content-input {
  font-size: 14px;
  color: #1a1a1a;
  width: 100%;
  min-height: 100px;
  line-height: 1.6;
}

.title-count, .content-count {
  font-size: 11px;
  color: #cccccc;
  text-align: right;
  margin-top: 4px;
}

.tag-section {
  padding: 14px 16px;
  border-bottom: 1px solid #f5f5f5;
}

.tag-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
  &:active { opacity: 0.7; }
}

.tag-text {
  font-size: 14px;
  color: #ff2442;
}

.selected-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-chip {
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #fff0f3;
  border-radius: 12px;
  padding: 4px 10px;
}

.tag-chip-text {
  font-size: 13px;
  color: #ff2442;
}

.settings-section {
  background-color: #ffffff;
}

.setting-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
  &:active { background-color: #f9f9f9; }
}

.setting-label {
  flex: 1;
  font-size: 14px;
  color: #1a1a1a;
}

.setting-right {
  display: flex;
  align-items: center;
  gap: 6px;
}

.setting-value {
  font-size: 13px;
  color: #999999;
}
</style>
