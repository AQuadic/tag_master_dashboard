import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import EditProfile from "./EditProfile"

const MainTabs = () => {
    return (
        <section>
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Tabs defaultValue="edit">
                    <TabsList className="md:w-md">
                        <TabsTrigger value="edit">Edit profile</TabsTrigger>
                        <TabsTrigger value="manageProfile">Manae profile</TabsTrigger>
                        <TabsTrigger value="manageTheme">Manae theme</TabsTrigger>
                    </TabsList>
                    <TabsContent value="edit">
                        <div>
                            <EditProfile />
                        </div>
                    </TabsContent>
                    <TabsContent value="manageProfile">
                        <div>hello</div>
                    </TabsContent>
                    <TabsContent value="manageTheme">
                        <div>i</div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default MainTabs
