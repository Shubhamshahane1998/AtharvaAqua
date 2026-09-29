from docx import Document
from docx.shared import Pt
from docx.enum.text import WD_ALIGN_PARAGRAPH


doc = Document()
section = doc.sections[0]
section.left_margin = 720  # 1 inch
section.right_margin = 720

# Title
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p.add_run('Atharva Aqua Website – Project Summary')
run.bold = True
run.font.size = Pt(22)

# Content as simple paragraphs and bullets
sections = [
    ("1. Project Overview", [
        "Atharva Aqua is a local service website focused on RO water purifier repair, installation, filter replacement, and annual maintenance in Pune and Pimpri-Chinchwad. The business objective is to generate leads through local SEO, clear service messaging, and direct contact actions such as phone calls and WhatsApp.",
        "The website is built with Next.js and is optimized for fast static deployment and search visibility.",
    ]),
    ("2. Main Sections on the Home Page", [
        "The homepage includes the following sections:",
        "• Hero Section",
        "• Services Section",
        "• Products Section",
        "• Need Help Choosing Section",
        "• About Section",
        "• Why Choose Us Section",
        "• Testimonials Section",
        "• Final CTA Section",
    ]),
    ("3. Functional Features", [
        "• Service and product listings with structured content",
        "• Dynamic service detail pages",
        "• City-wise local service pages",
        "• Mobile-friendly responsive design",
        "• Direct phone and WhatsApp actions",
        "• Contact and lead generation flow",
        "• SEO-ready metadata and schema markup",
        "• Static export for GitHub Pages deployment",
        "• Sitemap and robots configuration for indexing",
    ]),
    ("4. What the Website Does", [
        "This site is designed to:",
        "• Promote RO service and repair offerings in Pune",
        "• Help users find local service quickly",
        "• Build trust using service details, testimonials, and product information",
        "• Convert visitors into enquiries through phone and WhatsApp",
        "• Improve search visibility for local service keywords",
        "• Support a clean static deployment with minimal hosting cost",
    ]),
    ("5. SEO Implementation", [
        "The website includes SEO-focused features such as:",
        "• Page-level title and meta descriptions",
        "• Canonical URLs",
        "• Open Graph and Twitter metadata",
        "• Structured JSON-LD schema",
        "• Local business schema for service marketing",
        "• Service and product schema for product/service pages",
        "• Sitemap generation",
        "• Robots.txt configuration",
        "• Local landing pages targeting city/service area searches",
        "This structure is designed for local SEO and map-related search visibility.",
    ]),
    ("6. Key Files", [
        "• README.md",
        "• src/app/page.tsx",
        "• src/lib/site.ts",
        "• src/lib/schema.ts",
        "• src/app/sitemap.ts",
        "• src/app/robots.ts",
        "• next.config.ts",
        "• .github/workflows/deploy.yml",
    ]),
    ("7. Technical Stack", [
        "• Next.js",
        "• React",
        "• TypeScript",
        "• Tailwind CSS",
        "• Static export deployment",
        "• GitHub Pages hosting support",
    ]),
    ("8. Build Verification", [
        "I verified the project builds successfully using the production build command:",
        "• npm run build",
        "• Result: successful static generation with no build errors",
    ]),
    ("9. Summary", [
        "This website is a complete local business website for Atharva Aqua, designed to drive service enquiries, establish trust, and rank well for service-related local searches. It combines business marketing, technical page structure, and SEO best practices into one strong digital presence.",
    ]),
]

for heading, lines in sections:
    h = doc.add_paragraph()
    r = h.add_run(heading)
    r.bold = True
    r.font.size = Pt(14)
    for line in lines:
        if line.startswith('• '):
            p = doc.add_paragraph(style='List Bullet')
            p.add_run(line[2:])
        else:
            p = doc.add_paragraph()
            p.add_run(line)

output_path = r"E:\Ataharva Aqua\website\AtharvaAqua_Project_Summary.docx"
doc.save(output_path)
print(output_path)
