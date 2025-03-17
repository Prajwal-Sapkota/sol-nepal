/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /node_modules\/canvas\/build\/Release\/canvas\.node$/,
        use: 'null-loader',
      });
  
      config.resolve.alias = {
        ...config.resolve.alias,
        canvas: false,
      };
  
      return config;
    },
  };
  
  export default nextConfig;