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
};

export default nextConfig;

