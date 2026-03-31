import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-container mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        <h2 className="font-heading text-h2 mb-6">
          Join the Matcha Movement
        </h2>

        <p className="text-body max-w-lg mx-auto opacity-80 mb-8">
          Follow us on Instagram for updates, promos, and matcha inspiration.
        </p>

        <Button
          href="https://ig.me/m/matchakun.id"
          className="px-8 py-4 rounded-full text-neutral-white bg-neutral-black hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Follow @matchakun.id
        </Button>
      </div>
    </section>
  );
}