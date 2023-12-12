import React from 'react';
import { useSpring, animated } from 'react-spring';
import useScrollAnimation from './useScrollAnimation';
import './MoveUpSection.css';

const MoveUpSection = ({ sectionId, children, index }) => {
    const isVisible = useScrollAnimation(sectionId);

    const moveUpAnimation = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        config: { delay: index * 900 }, // Adjust the delay based on your preference
    });

    return (
        <animated.section id={sectionId} className="move-up-section" style={moveUpAnimation}>
            {children}
        </animated.section>
    );
};

export default MoveUpSection;
