


export class apiResponse {
    status: number
    message: {}
    failed_sucess: string | "sucess"
    constructor(status: number, data: {}, message: string | "sucess") {
        this.status = status
        this.message = data
        this.failed_sucess = message
    }
}