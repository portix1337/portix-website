import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import DiscordBotHosting from "@/pages/DiscordBotHosting";
import TelegramBotHosting from "@/pages/TelegramBotHosting";
import FAQ from "@/pages/FAQ";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/discord-bot-hosting" component={DiscordBotHosting} />
        <Route path="/telegram-bot-hosting" component={TelegramBotHosting} />
        <Route path="/faq" component={FAQ} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
