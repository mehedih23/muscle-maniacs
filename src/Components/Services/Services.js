import useServices from '../../Hooks/useServices'
import Service from '../Service/Service';
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    const [services] = useServices();
    const oneServices = services.slice(0, 3);
    return (
        <div className='container'>
            <h2 style={{ color: '#120E43' }} className='my-3 text-center'>Our Services</h2>
            <div className='row'>
                {
                    oneServices.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='d-flex justify-content-end my-4'>
                <button className='see-more-btn'>See More <FontAwesomeIcon className='ms-1' icon={faArrowRight} /></button>
            </div>
        </div>
    )
}

export default Services