// Sharp initialization for Next.js - Prevents linux-x64 runtime errors
// This ensures Sharp loads with correct macOS ARM64 binaries

// Set Sharp environment variables before requiring
process.env.SHARP_IGNORE_GLOBAL_LIBVIPS = '1';
process.env.SHARP_FORCE_GLOBAL_LIBVIPS = '0';
process.env.SHARP_DISABLE_CACHE = '1';

try {
  // Preload Sharp to ensure correct binaries
  const sharp = require('sharp');
  
  // Silent success - only log errors
  if (process.env.NODE_ENV === 'development') {
    console.log('🖼️  Sharp image optimization ready');
  }
  
} catch (error) {
  console.error('❌ Sharp initialization failed:', error.message);
  // Don't crash the process, just log the error
}

module.exports = {};
