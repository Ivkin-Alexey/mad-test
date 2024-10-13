export type TTime = number

export type TID = string

export interface IQuestion {
    id: TID,
    type: string
    topic: string
    options?: string[]
    time?: number
    isOptional?: boolean
    userAnswer?: string
}

export interface IAnswer {
    id: TID,
    userAnswer?: string | string[]
}

