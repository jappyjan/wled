/// <reference types="node" />
import { Logger } from 'homebridge';
import { EventEmitter } from 'events';
interface WLEDClientOptions {
    topic: string;
    logger: Logger;
    host: string;
    port: number;
}
interface WLEDClientEvents {
    'change:displayName': (newName: string) => void;
    'change:fx': (newFx: string) => void;
    'change:brightness': (newBrightness: number) => void;
}
export declare interface WLEDClient {
    on<U extends keyof WLEDClientEvents>(event: U, listener: WLEDClientEvents[U]): this;
    emit<U extends keyof WLEDClientEvents>(event: U, ...args: Parameters<WLEDClientEvents[U]>): boolean;
}
export declare class WLEDClient extends EventEmitter {
    private readonly client;
    private readonly log;
    private readonly topic;
    private colorState;
    constructor(props: WLEDClientOptions);
    private handleApiResponseMessage;
    setPower(on: boolean): void;
    setEffect(effectIndex: number): void;
    setBrightness(brightness: number): void;
    setHue(value: number): void;
    setSaturation(value: number): void;
    private updateColor;
}
export {};
//# sourceMappingURL=WLEDClient.d.ts.map