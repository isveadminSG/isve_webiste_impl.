<template>
    <footer>
      <div class="footer-content">
        <p>© 2024 Company Name. All Rights Reserved.</p>
        <div class="social-icons">
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  </template>

  <style scoped>
footer {
  background-color: #333;
  padding: 2rem 0;
  color: #fff;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.social-icons a {
  color: white;
  margin: 0 10px;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ff7b54;
}

p {
  margin-bottom: 1rem;
}
</style>