import { Switch } from "@/components/ui/switch" 
import { Label } from "@/components/ui/label"
import { useOutletContext } from "react-router";

function Settings() {
	const ctx = useOutletContext();

	return (
		<div className="p-6 flex flex-col gap-5">
			<h1 className="font-bold text-md">Settings</h1>
			<div className="p-10 border-2 border-[var(--secondary)] rounded-md h-full">
				<div className="flex gap-2 items-center">
					<Switch id="mock" checked={ctx.mock} onCheckedChange={ctx.setMock} />
					<Label htmlFor="mock">Mock Data</Label>
				</div>
			</div>
		</div>
	)
}

export default Settings
