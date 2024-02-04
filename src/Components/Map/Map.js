import './Map.css'

const Map =()=>{
    return (
       <div >
           <div id ='adress'>
            Кафе "Шеф Шустов"
            Комсомольск- на Амуре , пр.Ленина,25
           </div>
           <div className='responsive-map'>
           <iframe title='map-title' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.247220335476!2d137.00266347685505!3d50.54817238032229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ee850e7c314427d%3A0xc2069b578edcb2d6!2sProspekt%20Lenina%2C%2025%2C%20Komsomolsk-on-Amur%2C%20Khabarovskiy%20kray%2C%20%E3%83%AD%E3%82%B7%E3%82%A2%20681013!5e0!3m2!1sja!2sjp!4v1706925308570!5m2!1sja!2sjp" width="600" height="450"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" aria-hidden="true"  ></iframe>
           </div>
       </div>
    )
}
export default Map