import { device } from '../../../helpers/breakpoints'


const bannerStyles  = {
   width:"100%",
   position:"relative"
}

const Banner = props => (
   <div style={bannerStyles}>
      <h1 className="banner-title">{props.title}</h1>
      <img src={props.src} alt={props.title} style={bannerStyles} />

      <style jsx>
         {
            `

            .banner-title{
               position: absolute;
               color: #fff;
               bottom: 0;
               left: 5px;
               font-size: 3em;
               z-index: 1;
            }
            
            @media ${device.tablet}{
               .banner-title{
                  font-size:4em
               }
            }
            
            `
         }

      </style>
   </div>
)

export default Banner;