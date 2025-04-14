import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ClosetView from "../views/ClosetView.vue";
import ScannerView from "@/views/ScannerView.vue";
import HomeView from "@/views/HomeView.vue";
import PhotoReviewView from "@/views/PhotoReviewView.vue";
import GeneratorView from "@/views/GeneratorView.vue";
import ChatbotView from "@/views/ChatbotView.vue";
import SocialMediaView from "@/views/SocialMediaView.vue";
import BuyListView from "@/views/BuyListView.vue";
import OufitOfTheDayView from "@/views/OufitOfTheDayView.vue";
import CalendaryView from "@/views/CalendaryView.vue";
import DonationPointsView from "@/views/DonationPointsView.vue";
import StadisticsView from "@/views/StadisticsView.vue";
import VRView from "@/views/VRView.vue";

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeView },
    { path: "/photoReview", component: PhotoReviewView },
    { path: "/login", component: LoginView },
    { path: "/register", component: RegisterView },
    { path: "/closet", component: ClosetView },
    { path: "/scanner", component: ScannerView },
    { path: "/generator", component: GeneratorView },
    { path: "/chatbot", component: ChatbotView },
    { path: "/socialMedia", component: SocialMediaView },
    { path: "/buy", component: BuyListView },
    { path: "/ootd", component: OufitOfTheDayView },
    { path: "/calendary", component: CalendaryView },
    { path: "/donationPoints", component: DonationPointsView },
    { path: "/metrics", component: StadisticsView },
    { path: "/VR", component: VRView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
