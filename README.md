# Expo Image Component Remote Image Loading Issue

This repository demonstrates a bug where the Expo `Image` component fails to load images from a remote URL. The problem is intermittent and may be caused by network conditions or server-side issues.  The solution shows how to implement more robust error handling and improve loading performance.

## Bug Description
The `Image` component sometimes fails to display images loaded from remote URLs, showing a broken image icon or a blank space. This is particularly noticeable under slower network conditions. 

## Solution
The solution involves adding error handling and using a placeholder image while loading. This provides a better user experience and helps to pinpoint the root cause of loading failures. 