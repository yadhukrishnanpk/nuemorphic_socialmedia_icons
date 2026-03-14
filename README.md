# 👉 Neumorphic Social Media Interaction Set

A high-fidelity UI component featuring **Neumorphic (Soft UI)** social media icons. This project demonstrates advanced CSS shadow manipulation and jQuery-driven state transitions to create a tactile, physical feel for web interfaces.



## 🎯 Project Overview

This repository showcases two distinct approaches to Neumorphic button interaction:
1.  **Row 1 (The Inset Toggle):** The entire button surface transitions from an "extruded" state to a "pressed" state using `inset` shadows.
2.  **Row 2 (The Inner-Ring Depth):** A more complex nested depth effect where a secondary inner shadow ring appears, creating a sophisticated "concave" look while maintaining the icon's prominence.

---

## 🛠️ Technical Architecture

### **Core Stack**
* **HTML5:** Semantic list-based structure for accessibility.
* **CSS3:** Advanced `box-shadow` stacking and `:nth-child` selectors for brand-specific color injection.
* **jQuery 3.7.1:** Efficient DOM manipulation for toggling interaction classes.
* **Font Awesome 7.0.1:** Scalable vector iconography.

### **The Neumorphic Formula**
The "Soft UI" aesthetic is achieved through a specific mathematical balance of light and shadow relative to the background color (`#dde1e7`):

| Property | Light Source (Top-Left) | Shadow Source (Bottom-Right) |
| :--- | :--- | :--- |
| **Color** | `#ffffff73` (Translucent White) | `rgba(94, 104, 121, 0.288)` (Soft Grey) |
| **Blur** | 7px | 5px |
| **Offset** | -3px / -3px | 3px / 3px |



---

## 🎨 Interaction States

### **1. Neutral State**
Icons start in an extruded position with a neutral grey color (`#b6bbc5`), blending into the background to emphasize the 3D shape.

### **2. Active State (The "Fill" Logic)**
Upon clicking, a `.fill-color` class is applied via jQuery. This triggers a color transition based on the brand's official hex code:
* **Facebook:** `#1877f2`
* **WhatsApp:** `#25d366`
* **Instagram:** `#e1306c`
* **LinkedIn:** `#2867b2`
* **GitHub:** `#333333`

---

## 📂 File Structure

* `index.html` - Main markup and CDN imports.
* `socialmedia.css` - Neumorphic variables and transformation logic.
* `socialmedia.js` - jQuery event listeners.

---

>[!IMPORTANT]
> This project is developed for **educational and portfolio purposes**. 
>
> The primary goal is to demonstrate:
> * Advanced CSS **Neumorphic design** techniques.
> * Interactive UI/UX transitions using **jQuery**.
> * Practical application of **Box-Shadow** physics in web design.
> 
> This code is intended to serve as a reference or learning resource for developers exploring soft-UI trends and DOM manipulation. Feel free to experiment with the shadows and logic to further your understanding of modern front-end styling.
