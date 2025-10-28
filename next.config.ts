const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "Carlo2024",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "school",
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  serverExternalPackages: ['@prisma/studio-core'],
  // Fix workspace root warning
  outputFileTracingRoot: __dirname,
  // Ensure Sharp is properly handled
  images: {
    loader: 'default',
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;

