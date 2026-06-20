// app.js Example using native Vite preview on the cPanel environment port
import('vite').then(({ preview }) => {
  preview({
    preview: {
      port: process.env.PORT || 3000,
      host: true
    }
  });
});
