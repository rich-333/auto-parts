import { AdOffer } from "../../components/home/ads/adOffer"
import { AdParts } from "../../components/home/ads/adParts"

export function Ads() {
	return(
		<section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
			<AdOffer/>
			<AdParts/>
		</section>
	)
}