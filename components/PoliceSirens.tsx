"use client";

import { useEffect, useRef } from 'react';

export default function PoliceSirens() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const size = 120; // Size of the canvas
        canvas.width = size;
        canvas.height = size;

        const centerX = size / 2;
        const centerY = size / 2;
        const sirenRadius = 35;

        let animationFrame: number;
        let rotation = 0;

        const animate = () => {
            ctx.clearRect(0, 0, size, size);

            rotation += 0.08; // Rotation speed

            // Draw the siren housing (gray dome)
            const housingGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, sirenRadius + 5);
            housingGradient.addColorStop(0, '#555');
            housingGradient.addColorStop(0.7, '#333');
            housingGradient.addColorStop(1, '#111');

            ctx.beginPath();
            ctx.arc(centerX, centerY, sirenRadius + 5, 0, Math.PI * 2);
            ctx.fillStyle = housingGradient;
            ctx.fill();

            // Draw divider line
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(rotation);

            ctx.strokeStyle = '#000';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, -sirenRadius);
            ctx.lineTo(0, sirenRadius);
            ctx.stroke();

            // Draw red half (left side when rotation = 0)
            ctx.beginPath();
            ctx.arc(0, 0, sirenRadius, -Math.PI / 2, Math.PI / 2);
            ctx.lineTo(0, 0);
            ctx.closePath();

            const redGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, sirenRadius);
            redGradient.addColorStop(0, '#ff0000');
            redGradient.addColorStop(0.6, '#cc0000');
            redGradient.addColorStop(1, '#880000');
            ctx.fillStyle = redGradient;
            ctx.fill();

            // Draw blue half (right side when rotation = 0)
            ctx.beginPath();
            ctx.arc(0, 0, sirenRadius, Math.PI / 2, -Math.PI / 2);
            ctx.lineTo(0, 0);
            ctx.closePath();

            const blueGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, sirenRadius);
            blueGradient.addColorStop(0, '#0066ff');
            blueGradient.addColorStop(0.6, '#0044cc');
            blueGradient.addColorStop(1, '#002288');
            ctx.fillStyle = blueGradient;
            ctx.fill();

            // Add rotating light beams
            const beamLength = sirenRadius * 2.5;

            // Red beam
            ctx.globalAlpha = 0.6;
            const redBeamGradient = ctx.createLinearGradient(-sirenRadius, 0, -beamLength, 0);
            redBeamGradient.addColorStop(0, 'rgba(255, 0, 0, 0.8)');
            redBeamGradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

            ctx.beginPath();
            ctx.moveTo(-sirenRadius, 0);
            ctx.lineTo(-beamLength, -20);
            ctx.lineTo(-beamLength, 20);
            ctx.closePath();
            ctx.fillStyle = redBeamGradient;
            ctx.fill();

            // Blue beam
            const blueBeamGradient = ctx.createLinearGradient(sirenRadius, 0, beamLength, 0);
            blueBeamGradient.addColorStop(0, 'rgba(0, 100, 255, 0.8)');
            blueBeamGradient.addColorStop(1, 'rgba(0, 100, 255, 0)');

            ctx.beginPath();
            ctx.moveTo(sirenRadius, 0);
            ctx.lineTo(beamLength, -20);
            ctx.lineTo(beamLength, 20);
            ctx.closePath();
            ctx.fillStyle = blueBeamGradient;
            ctx.fill();

            ctx.globalAlpha = 1;
            ctx.restore();

            // Add shine effect
            ctx.globalAlpha = 0.3;
            ctx.beginPath();
            ctx.arc(centerX - 10, centerY - 10, 15, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.globalAlpha = 1;

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="inline-block"
            style={{ width: '80px', height: '80px' }}
        />
    );
}
