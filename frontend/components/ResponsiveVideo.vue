<template>
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
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
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
    }
  })
  
  // Different permission attributes for different platforms
  const allowFeatures = computed(() => {
    if (props.platform === 'youtube') {
      return "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    } else if (props.platform === 'vimeo') {
      return "autoplay; fullscreen; picture-in-picture"
    }
    return ""
  })
  
  // Classes for the container including platform-specific classes
  const containerClasses = computed(() => {
    return [
      'responsive-video-container',
      `responsive-video-container--${props.platform}`,
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
    
    if (props.platform === 'youtube') {
      return `https://www.youtube.com/embed/${props.videoId}${queryString}`
    } else if (props.platform === 'vimeo') {
      return `https://player.vimeo.com/video/${props.videoId}${queryString}`
    }
    return ''
  })
  </script>
  
  <style scoped>
  /* Common styles */
  .responsive-video-container {
    position: relative;
    width: auto;
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
  .video-wrapper {
    max-width: 1600px;
    margin: 0 0;
    width: 100%;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .video-wrapper {
      max-width: 100%;
      padding: 0 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .responsive-video-container {
      margin-bottom: 0.5rem;
    }
  }
  </style>