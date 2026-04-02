'use client'

import { ReactNode, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface BottomSheetProps {
    children: ReactNode;
    open: boolean;
    onClose?: () => void;
    className?: string;
}

export default function BottomSheet({ children, open, onClose, className = "" }: BottomSheetProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const sheetRef = useRef<HTMLDivElement>(null);
    const draggableRef = useRef<Draggable[]>();
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;

    const sheetHeight = typeof window !== 'undefined' ? window.innerHeight * 0.55 : 500;

    const animateOpen = useCallback(() => {
        const overlay = overlayRef.current;
        const sheet = sheetRef.current;
        if (!overlay || !sheet) return;

        overlay.style.display = "block";
        sheet.style.display = "block";

        gsap.to(overlay, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
        });

        gsap.fromTo(sheet,
            { y: sheetHeight },
            {
                y: 0,
                duration: 0.45,
                ease: "power4.out",
            }
        );
    }, [sheetHeight]);

    const animateClose = useCallback(() => {
        const overlay = overlayRef.current;
        const sheet = sheetRef.current;
        if (!overlay || !sheet) return;

        gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
        });

        gsap.to(sheet, {
            y: sheetHeight,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
                overlay.style.display = "none";
                sheet.style.display = "none";
                onCloseRef.current?.();
            },
        });
    }, [sheetHeight]);

    useEffect(() => {
        if (open) {
            animateOpen();
        } else {
            if (sheetRef.current?.style.display === "block") {
                animateClose();
            }
        }
    }, [open, animateOpen, animateClose]);

    // Draggable
    useEffect(() => {
        const sheet = sheetRef.current;
        if (!sheet) return;

        draggableRef.current = Draggable.create(sheet, {
            type: "y",
            bounds: { minY: 0, maxY: sheetHeight + 100 },
            inertia: true,
            edgeResistance: 1,
            onDrag: function () {
                const progress = 1 - (this.y / sheetHeight);
                if (overlayRef.current) {
                    gsap.set(overlayRef.current, { opacity: Math.max(0, progress) });
                }
            },
            onDragEnd: function () {
                if (this.y > sheetHeight * 0.2) {
                    // Close
                    animateClose();
                } else {
                    // Snap back with spring
                    gsap.to(this.target, {
                        y: 0,
                        duration: 0.35,
                        ease: "power4.out",
                    });
                    if (overlayRef.current) {
                        gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
                    }
                }
            }
        });

        return () => {
            draggableRef.current?.forEach(d => d.kill());
        };
    }, [sheetHeight, animateClose]);

    return (
        <>
            {/* Backdrop overlay */}
            <div
                ref={overlayRef}
                onClick={animateClose}
                style={{ display: "none", opacity: 0 }}
                className="fixed inset-0 z-[98] bg-black/50 backdrop-blur-sm"
            />

            {/* Sheet */}
            <aside
                ref={sheetRef}
                style={{ display: "none" }}
                className={`fixed bottom-0 left-0 w-full z-[99] rounded-t-[20px] px-8 pt-4 pb-10 bg-gradient-to-b from-traditionalColor500 to-traditionalColor600 shadow-[0_-4px_40px_rgba(0,0,0,0.25)] ${className}`}
                role="dialog"
            >
                {/* Drag Handle - iOS style */}
                <div className="flex justify-center pt-2 pb-6">
                    <div className="w-9 h-[5px] rounded-full bg-white/40" />
                </div>

                {children}
            </aside>
        </>
    );
}
