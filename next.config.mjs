/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Endereço antigo do formulário
    return [{ source: "/aplicacao", destination: "/cadastro", permanent: false }];
  },
};

export default nextConfig;
