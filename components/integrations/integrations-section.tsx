import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from '@/components/integrations/logos'
import { LogoIcon } from '@/components/integrations/logos/logo'
import { cn } from '@/lib/utils'
import LogoCloud from '../cloudlogo/cloud-logo'
import LogoCloud2 from '../cloudlogo2/cloud-logo2'

export default function IntegrationsSection() {
    return (
        <section>
            <div className=" dark:bg-background py-24 md:py-32 mt-20 ">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid items-start sm:grid-cols-2 gap-50">
                        <div className="dark:bg-muted/50 relative mx-auto w-fit">
                            <div
                                aria-hidden
                                className="bg-radial to-background dark:to-background absolute inset-0 z-10 from-transparent to-75%"
                            />
                            <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <Gemini />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Replit />
                                </IntegrationCard>
                            </div>
                            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <MagicUI />
                                </IntegrationCard>
                                <IntegrationCard
                                    borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                                    className="dark:bg-white/10">
                                    <LogoIcon />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <VSCodium />
                                </IntegrationCard>
                            </div>

                            <div className="mx-auto flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <MediaWiki />
                                </IntegrationCard>

                                <IntegrationCard>
                                    <GooglePaLM />
                                </IntegrationCard>
                            </div>
                        </div>
                        <div className="mx-auto  max-w-lg space-y-6 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-balance mt-6 text-3xl font-semibold md:text-4xl">About me</h2>
                            <p className="text-muted-foreground">Connect seamlessly with popular platforms and services to enhance your workflow.</p>

                        </div>
                    </div>
                </div>
            </div>
            <LogoCloud />
            <LogoCloud2 />
        </section>
    )
}

const IntegrationCard = ({ children, className, borderClassName }: { children: React.ReactNode; className?: string; borderClassName?: string }) => {
    return (
        <div className={cn('bg-background relative flex size-20 rounded-xl dark:bg-transparent', className)}>
            <div
                role="presentation"
                className={cn('absolute inset-0 rounded-xl border border-black/20 dark:border-white/25', borderClassName)}
            />
            <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
        </div>
    )
}
