import { FiAlertCircle } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";

export const cardContent = [
    {
        title: "Order Sync Successful!",
        description: "Your order details from the last 30 days have been successfully synced. Check them out now!",
        btns: [
            { title: 'Explore Your Orders', }
        ],
        bgColor: '#ffff',
    },
    {
        title: "Customize Customer Notification",
        TitleIcon: FiAlertTriangle,
        description: "Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers",
        btns: [
            {
                title: 'Configure Notifications',
            }
        ],
        bgColor: '#fff8db',
    },
    {
        title: "Your Tracking Link has been generated",
        TitleIcon: FiAlertCircle,
        description: "Include the Link to Your Store's Navigation Menu.",
        btns: [
            {
                title: 'Explore Your Orders',
            },
            {
                title: 'Copy Link',
                color: '#ffff',
                textColor: '#0000'
            },
        ],
        bgColor: '#eaf4ff'
    },
]