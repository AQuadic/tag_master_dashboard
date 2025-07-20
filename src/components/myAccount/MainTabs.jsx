import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import EditProfile from "./EditProfile"
import ManageLinks from "./ManageLinks"

const MainTabs = () => {
    return (
        <section>
            <div className="flex w-full  flex-col gap-6">
                <Tabs defaultValue="edit">
                    <TabsList className="md:w-md w-full md:flex-row flex-col h-full">
                        <TabsTrigger value="edit">Edit profile</TabsTrigger>
                        <TabsTrigger value="manageLinks">Manage links</TabsTrigger>
                        <TabsTrigger value="manageTheme">Manae theme</TabsTrigger>
                    </TabsList>
                    <div className="w-full h-px bg-[#9C9C9C]"></div>
                    <TabsContent value="edit">
                        <div>
                            <EditProfile />
                        </div>
                    </TabsContent>
                    <TabsContent value="manageLinks">
                        <div>
                            <ManageLinks />
                        </div>
                    </TabsContent>
                    <TabsContent value="manageTheme">
                        <div></div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default MainTabs
