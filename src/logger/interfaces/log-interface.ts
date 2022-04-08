interface Log {
    where: string
    why: string    
    what: string
    error?: Error
    errorStack?: string
    
}

export default Log