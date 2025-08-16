<template>
    <div class="responsive-video-wrapper">
      <!-- Main Video Player -->
      <div class="video-wrapper">
        <div :class="containerClasses">
          <iframe 
            :src="videoUrl" 
            :title="title"
            :allow="allowFeatures"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen>
          </iframe>
        </div>
      </div>
  
      <!-- Playlist Section (optional) -->
      <div v-if="showPlaylist && playlist.length > 0" class="playlist-container">
        <h3 v-if="playlistTitle" class="playlist-title">{{ playlistTitle }}</h3>
        
        <div class="playlist-grid">
          <div 
            v-for="(video, index) in playlist" 
            :key="index"
            class="playlist-item"
            :class="{ 'playlist-item--active': currentVideoIndex === index }"
            @click="selectVideo(index)"
          >
            <div class="playlist-thumbnail">
              <img 
                :src="getThumbnailUrl(video)"
                :alt="video.title || `Video ${index + 1}`"
                class="playlist-thumbnail-img"
              />
              <div class="playlist-duration" v-if="video.duration">{{ formatDuration(video.duration) }}</div>
              <div class="playlist-play-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div class="playlist-info">
              <div class="playlist-title">{{ video.title || `Video ${index + 1}` }}</div>
              <div class="playlist-meta" v-if="video.author">{{ video.author }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  
  const props = defineProps({
    videoId: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      default: 'youtube',
      validator: (value) => ['youtube', 'vimeo'].includes(value)
    },
    title: {
      type: String,
      default: 'Video Player'
    },
    aspectRatio: {
      type: String,
      default: '16:9',
      validator: (value) => ['16:9', '4:3', '1:1'].includes(value)
    },
    params: {
      type: Object,
      default: () => ({})
    },
    playlist: {
      type: Array,
      default: () => [],
      // Each playlist item should have: { id, platform (optional), title, thumbnail (optional), author (optional), duration (optional) }
    },
    showPlaylist: {
      type: Boolean,
      default: false
    },
    playlistTitle: {
      type: String,
      default: ''
    },
    playlistLayout: {
      type: String,
      default: 'grid',
      validator: (value) => ['grid', 'horizontal', 'vertical'].includes(value)
    }
  })
  
  const emit = defineEmits(['videoChange'])
  
  // Current video index in playlist
  const currentVideoIndex = ref(0)
  
  // Watch for videoId changes from outside
  watch(() => props.videoId, (newVideoId) => {
    // Find the index of the video with this ID
    const index = props.playlist.findIndex(item => item.id === newVideoId)
    if (index !== -1) {
      currentVideoIndex.value = index
    }
  }, { immediate: true })
  
  // Different permission attributes for different platforms
  const allowFeatures = computed(() => {
    if (getCurrentPlatform.value === 'youtube') {
      return "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    } else if (getCurrentPlatform.value === 'vimeo') {
      return "autoplay; fullscreen; picture-in-picture"
    }
    return ""
  })
  
  // Get the current video's platform (or fallback to component platform)
  const getCurrentPlatform = computed(() => {
    if (props.playlist.length > 0 && currentVideoIndex.value < props.playlist.length) {
      return props.playlist[currentVideoIndex.value].platform || props.platform
    }
    return props.platform
  })
  
  // Get the current video ID (from playlist or component prop)
  const getCurrentVideoId = computed(() => {
    if (props.playlist.length > 0 && currentVideoIndex.value < props.playlist.length) {
      return props.playlist[currentVideoIndex.value].id
    }
    return props.videoId
  })
  
  // Classes for the container including platform-specific classes
  const containerClasses = computed(() => {
    return [
      'responsive-video-container',
      `responsive-video-container--${getCurrentPlatform.value}`,
      { 'responsive-video-container--4-3': props.aspectRatio === '4:3' },
      { 'responsive-video-container--1-1': props.aspectRatio === '1:1' }
    ]
  })
  
  // Construct URL with parameters
  const videoUrl = computed(() => {
    // Convert params object to URL query string
    const queryParams = new URLSearchParams()
    Object.entries(props.params).forEach(([key, value]) => {
      queryParams.append(key, value)
    })
    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : ''
    
    if (getCurrentPlatform.value === 'youtube') {
      return `https://www.youtube.com/embed/${getCurrentVideoId.value}${queryString}`
    } else if (getCurrentPlatform.value === 'vimeo') {
      return `https://player.vimeo.com/video/${getCurrentVideoId.value}${queryString}`
    }
    return ''
  })
  
  // Select a video from the playlist
  const selectVideo = (index) => {
    if (index >= 0 && index < props.playlist.length) {
      currentVideoIndex.value = index
      emit('videoChange', props.playlist[index])
    }
  }
  
  // Get thumbnail URL for a video
  const getThumbnailUrl = (video) => {
    // Use provided thumbnail if available
    if (video.thumbnail) {
      return video.thumbnail
    }
    
    // Generate platform-specific thumbnail
    const platform = video.platform || props.platform
    if (platform === 'youtube') {
      return `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`
    } else if (platform === 'vimeo') {
      // Vimeo doesn't have a simple thumbnail URL format, so return a placeholder
      return 'https://placehold.co/320x180/333/white?text=Vimeo+Video'
    }
    
    // Fallback to generic placeholder
    return 'https://placehold.co/320x180/333/white?text=Video'
  }
  
  // Format duration in seconds to MM:SS
  const formatDuration = (seconds) => {
    if (!seconds) return ''
    
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }
  </script>
  
  <style scoped>
  /* Common styles */
  .responsive-video-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-bottom: 1rem;
    background-color: #000;
  }
  
  /* Aspect ratios */
  .responsive-video-container {
    padding-bottom: 56.25%; /* 16:9 Default */
    height: 0;
  }
  
  .responsive-video-container--4-3 {
    padding-bottom: 75%;
  }
  
  .responsive-video-container--1-1 {
    padding-bottom: 100%;
  }
  
  /* iframe styling */
  .responsive-video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    border: 0;
  }
  
  /* Vimeo specific fixes */
  .responsive-video-container--vimeo {
    padding-top: 0;
  }
  
  .responsive-video-container--vimeo iframe {
    min-height: 100%;
  }
  
  /* Wrapper */
  .responsive-video-wrapper {
    width: 100%;
  }
  
  .video-wrapper {
    max-width: 1600px;
    margin: 0 0;
    width: 100%;
  }
  
  /* Playlist Styles */
  .playlist-container {
    max-width: 1600px;
    margin:  0;
    width: 100%;
  }
  
  .playlist-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #fff;
  }
  
  /* Grid Layout */
  .playlist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    width: 100%;
  }
  
  /* Playlist Item */
  .playlist-item {
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease, background-color 0.2s ease;
  }
  
  .playlist-item:hover {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .playlist-item--active {
    background-color: rgba(255, 255, 255, 0.15);
    border-left: 3px solid #C3C3C3;
  }
  
  /* Thumbnail */
  .playlist-thumbnail {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    background-color: #000;
    overflow: hidden;
  }
  
  .playlist-thumbnail-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .playlist-item:hover .playlist-thumbnail-img {
    transform: scale(1.05);
  }
  
  /* Play Icon */
  .playlist-play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    transition: opacity 0.3s ease, background-color 0.3s ease;
  }
  
  .playlist-item:hover .playlist-play-icon {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  /* Duration */
  .playlist-duration {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.75rem;
  }
  
  /* Info */
  .playlist-info {
    padding: 0.75rem;
  }
  
  .playlist-info .playlist-title {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .playlist-meta {
    font-size: 0.8rem;
    color: #94a3b8;
  }
  
  /* Horizontal Layout Alternative */
  .playlist-grid.playlist-grid--horizontal {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 1rem;
    padding-bottom: 1rem;
    scrollbar-width: thin;
  }
  
  .playlist-grid.playlist-grid--horizontal .playlist-item {
    flex: 0 0 250px;
  }
  
  /* Vertical Layout Alternative */
  .playlist-grid.playlist-grid--vertical {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .playlist-grid.playlist-grid--vertical .playlist-item {
    display: flex;
    height: 80px;
  }
  
  .playlist-grid.playlist-grid--vertical .playlist-thumbnail {
    width: 120px;
    min-width: 120px;
    padding-bottom: 0;
    height: 100%;
  }
  
  .playlist-grid.playlist-grid--vertical .playlist-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .video-wrapper,
    .playlist-container {
      max-width: 100%;
      padding: 0 1rem;
    }
    
    .playlist-grid {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
  }
  
  @media (max-width: 480px) {
    .responsive-video-container {
      margin-bottom: 0.5rem;
    }
    
    .playlist-grid {
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }
    
    /* Force vertical layout on small screens */
    .playlist-grid.playlist-grid--horizontal {
      flex-wrap: wrap;
    }
    
    .playlist-grid.playlist-grid--horizontal .playlist-item {
      flex: 0 0 calc(50% - 0.25rem);
    }
  }
  </style>