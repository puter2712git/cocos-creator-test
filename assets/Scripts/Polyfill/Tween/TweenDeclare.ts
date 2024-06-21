declare namespace cc {
    interface Tween<T = any> {
        pause(): cc.Tween<T>;
        resume(): cc.Tween<T>;
    }

    namespace Tween {
        function pauseAll(): void;
        function resumeAll(): void;

        function delay(duration: number): Promise<void>;
    }
}
