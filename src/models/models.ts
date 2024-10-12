export interface IQuestion {
    type: string
    topic: string
    options?: string[]
    time?: number
    isOptional?: boolean
}