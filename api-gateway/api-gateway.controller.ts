import { ServiceDiscoveryService } from "./serviceDiscovery.service"
import axios from "axios"

const serviceDiscoveryService: ServiceDiscoveryService = new ServiceDiscoveryService()

export const apiGatewayController = {
    redirect: (req: any, res: any) => {
        const reqUrl = req.originalUrl
        const serviceName = reqUrl.split('/')[2]
        const serviceUrl = serviceDiscoveryService.getServiceUrl(serviceName)
        const method = req.method

        if (method === 'POST') {
            axios.post(serviceUrl + reqUrl, req.body).then((response: any) => {
                res.json(response.data)
            }).catch((error: any) => {
                console.log(error);
                res.sendStatus(500)
            })
        } else if (method === 'GET') {
            axios.get(serviceUrl + reqUrl).then((response: any) => {
                res.json(response.data)
            }).catch((error: any) => {
                console.log(error);
                res.sendStatus(500)
            })
        } else if (method === 'PUT') {
            axios.put(serviceUrl + reqUrl, req.body).then((response: any) => {
                res.json(response.data)
            }).catch((error: any) => {
                console.log(error);
                res.sendStatus(500)
            })
        } else if (method === 'DELETE') {
            axios.delete(serviceUrl + reqUrl).then((response: any) => {
                res.json(response.data)
            }).catch((error: any) => {
                console.log(error);
                res.sendStatus(500)
            })
        }

        console.log(serviceName);
        console.log(reqUrl); 
        console.log(serviceUrl);
        console.log(serviceUrl + reqUrl);
    }
}