<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js"></script>
    <script src="script.js"></script>
    
        // Initialize AOS Motion Animations
        AOS.init({
            duration: 900,
            once: true,
            easing: 'ease-out-cubic'
        });

        // Initialize Real 3D Card Hover & Lighting Engine
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 15,
            speed: 500,
            glare: true,
            "max-glare": 0.25,
            scale: 1.02
        });

        // Smooth Scroll to Top
        document.getElementById('scrollTopBtn').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
   
