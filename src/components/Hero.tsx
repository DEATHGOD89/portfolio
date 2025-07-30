@@ .. @@
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12 animate-fade-in-up delay-400">
             <a
-              href="/resume.pdf"
-              download
+              href="/resume.pdf"
+              download="Bhupender_Resume.pdf"
               className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-auto text-center"
+              onClick={(e) => {
+                // Force download with proper filename
+                e.preventDefault();
+                const link = document.createElement('a');
+                link.href = '/resume.pdf';
+                link.download = 'Bhupender_Resume.pdf';
+                document.body.appendChild(link);
+                link.click();
+                document.body.removeChild(link);
+              }}
             >
               <span className="relative z-10 flex items-center space-x-2">
                 <Download className="w-5 h-5" />
                 <span>Download Resume</span>
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             </a>