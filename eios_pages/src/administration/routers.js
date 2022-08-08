import FacultiesPage from "./student/pages/FacultiesPage";
import GroupsPage from "./student/pages/GroupsPage";
import StudentsPage from "./student/pages/StudentsPage";
import ProfilePage from "./student/pages/ProfilePage";

export const routers = {
    path: "/administration",
    Component: FacultiesPage,
    children: [
        {
            path: "/faculties",
            name: "Faculties Page",
            Component: FacultiesPage,
            children: [
                {
                    path: "/:faculty_id",
                    name: "Groups Page",
                    Component: GroupsPage,
                    children: [
                        {
                            path: "/group/:group_id",
                            name: "Students Page",
                            Component: StudentsPage
                        },
                    ]
                },
            ]
        },
    ],
    path: "/profile",
    name: "Profile",
    Component: ProfilePage
}