import { useEffect, useState } from 'react'
/
 * Custom hook to handle animations for FashionTV's luxury cosmetics website.
 * This hook is designed to provide elegant transitions and animations
 * that enhance user experience in a high-end fashion context.
 *
 * @returns {Object} An object containing the animation state and control methods.
 */
export interface AnimationState {
    isVisible: boolean
    fadeIn: () => void
    fadeOut: () => void
}

export const useAnimation = (): AnimationState => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    /
     * Triggers a fade-in animation.
     * This should be used when elements appear on the screen,
     * creating an inviting and luxurious experience for FashionTV's users.
     */
    const fadeIn = () => {
        setIsVisible(true)
        document.body.style.transition = 'background-color 0.5s ease-in-out'
        document.body.style.backgroundColor = '#ffc0cb'; // Light pink for elegance
    }
    /
     * Triggers a fade-out animation.
     * This should be used when elements disappear from the screen,
     * ensuring smooth transitions that maintain the high-end feel.
     */
    const fadeOut = () => {
        document.body.style.transition = 'background-color 0.5s ease-in-out'
        document.body.style.backgroundColor = '#ffffff'; // White for luxury
        setTimeout(() => setIsVisible(false), 500); // Match duration of transition
    }
    useEffect(() => {
        // Initial setup or animation trigger can be added here
        fadeIn(); // Start with a fade-in when the component mounts
    }, [])
    return { isVisible, fadeIn, fadeOut }
};