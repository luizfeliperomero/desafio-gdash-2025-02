import { Sparkles } from "lucide-react"

function InsightCard() {
	return (
		<div className="max-w-xl mx-auto p-6 rounded-xl shadow-lg 
                bg-white/70 backdrop-blur-md border border-gray-200 
                text-gray-800">
		  <div className="flex justify-between">
			  <h2 className="text-lg font-semibold text-gray-700 mb-3">
				Insight
			  </h2>
			  <Sparkles className="w-5 h-5 text-purple-600"/>
		  </div>

		  <p className="leading-relaxed text-sm">
			Here goes the AI-generated insight text.
		  </p>
		</div>
	)
}

export default InsightCard;
