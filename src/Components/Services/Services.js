import useServices from '../../Hooks/useServices'
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services] = useServices();
    return (
        <div className='container'>
            <h2 style={{ color: '#120E43' }} className='my-3 text-center'>Our Services</h2>
            <div className='row'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    )
}

export default Services