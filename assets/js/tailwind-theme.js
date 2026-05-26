function configurarTailwind() {
    if (typeof tailwind !== 'undefined') {
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#2a5a8d',     /* Azul Oxford (Para títulos principales, serio y premium) */

                        secondary: '#475569',   /* Azul Pizarra mate (Para textos y párrafos) */
                        accent: '#1E2D42',      /* Azul refinado (SOLO para pequeños detalles o estados activos) */
                        light: '#F8FAFC',       /* Fondo gélido limpio */
                        dark: '#0F172A',        /* Azul nocturno profundo */
                    },
                    fontFamily: {
                        heading: ['Syne', 'sans-serif'],
                        body: ['Plus Jakarta Sans', 'sans-serif'],
                    }
                }
            }
        };
    } else {
        setTimeout(configurarTailwind, 10);
    }
}
configurarTailwind();
