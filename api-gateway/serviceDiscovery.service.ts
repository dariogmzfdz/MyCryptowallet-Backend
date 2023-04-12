import propertiesReader from 'properties-reader';

const properties = propertiesReader('./application.properties')

export class ServiceDiscoveryService {
    getServiceUrl(serviceName: string) {
        const url =
            'http://' + serviceName + ':' + properties.get(serviceName + 'Service.port')
        return url
    }
}