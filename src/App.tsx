import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
    ArrowDown,
    ArrowRight,
    BrainCircuit,
    ChevronLeft,
    ChevronRight,
    CircleGauge,
    Expand,
    Grid2X2,
    Lightbulb,
    MessageSquare,
    Network,
    Newspaper,
    PanelRight,
    Sparkles,
    Target,
    Users,
    WalletCards,
    X,
} from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { presenters, Slide, slides } from './presentationData'

const heroImage =
    'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=88&w=1800'

const iconMap = [Target, BrainCircuit, WalletCards, Sparkles]

function Reveal({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode
    delay?: number
    className?: string
}) {
    const reduce = useReducedMotion()
    return (
        <motion.div
            className={className}
            initial={
                reduce ? false : { opacity: 0, y: 22, filter: 'blur(8px)' }
            }
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}

function SlideHeader({ slide }: { slide: Slide }) {
    return (
        <header className="slide-header">
            <Reveal>
                <p className="eyebrow">{slide.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
                <h2>{slide.title}</h2>
            </Reveal>
        </header>
    )
}

function StandardSlide({ slide }: { slide: Slide }) {
    if (slide.kind === 'title') {
        return (
            <div className="title-slide">
                <motion.img
                    src={heroImage}
                    alt="Abstract connected sphere representing an AI network"
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.48 }}
                    transition={{ duration: 1.2 }}
                />
                <div className="title-shade" />
                <div className="title-copy">
                    <Reveal>
                        <p className="eyebrow">{slide.eyebrow}</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1>{slide.title}</h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="title-subtitle">{slide.body}</p>
                    </Reveal>
                    <Reveal delay={0.3} className="title-meta">
                        <span>{slide.footnote}</span>
                        <span className="presenter-list">
                            {presenters.join(' · ')}
                        </span>
                    </Reveal>
                </div>
                <div className="orb orb-one" />
                <div className="orb orb-two" />
            </div>
        )
    }

    if (slide.kind === 'agenda') {
        return (
            <div className="content-slide agenda-slide">
                <SlideHeader slide={slide} />
                <div className="agenda-list">
                    {slide.items?.map((item, index) => (
                        <Reveal
                            key={item}
                            delay={0.08 + index * 0.055}
                            className="agenda-item"
                        >
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <p>{item}</p>
                            <ArrowRight size={20} />
                        </Reveal>
                    ))}
                </div>
            </div>
        )
    }

    if (slide.kind === 'quote') {
        return (
            <div className="content-slide quote-slide">
                <SlideHeader slide={slide} />
                <Reveal delay={0.12} className="quote-mark">
                    “
                </Reveal>
                <Reveal delay={0.18}>
                    <blockquote>{slide.quote?.replace(/[“”]/g, '')}</blockquote>
                </Reveal>
                <Reveal delay={0.3} className="quote-credit">
                    {slide.attribution?.map((line, i) => (
                        <p key={line} className={i === 0 ? 'credit-name' : ''}>
                            {line}
                        </p>
                    )) ?? <p>{slide.footnote}</p>}
                </Reveal>
            </div>
        )
    }

    if (slide.kind === 'split') {
        return (
            <div className="content-slide">
                <SlideHeader slide={slide} />
                <div className="split-grid">
                    {slide.items?.map((item, index) => {
                        const [tag, title, copy] = item.split('|')
                        const Icon = index === 0 ? BrainCircuit : Sparkles
                        return (
                            <Reveal
                                key={tag}
                                delay={0.14 + index * 0.12}
                                className="split-panel"
                            >
                                <Icon />
                                <p className="panel-tag">{tag}</p>
                                <h3>{title}</h3>
                                <p>{copy}</p>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        )
    }

    if (slide.kind === 'loop') {
        return (
            <div className="content-slide loop-slide">
                <SlideHeader slide={slide} />
                <div className="loop-layout">
                    <div className="loop-ring">
                        <div className="loop-core">
                            <CircleGauge />
                            <span>Realize+</span>
                        </div>
                        {slide.items?.map((item, index) => (
                            <motion.div
                                key={item}
                                className={`loop-node node-${index}`}
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + index * 0.12 }}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                    <Reveal delay={0.25} className="loop-copy">
                        <p>{slide.body}</p>
                        <span>Reallocating budgets</span>
                        <span>Optimizing content</span>
                    </Reveal>
                </div>
            </div>
        )
    }

    if (slide.kind === 'engines') {
        return (
            <div className="content-slide">
                <SlideHeader slide={slide} />
                <div className="engine-grid">
                    {slide.items?.map((item, index) => {
                        const [title, copy, output] = item.split('|')
                        const Icon = index === 0 ? BrainCircuit : Sparkles
                        return (
                            <Reveal
                                key={title}
                                delay={0.14 + index * 0.12}
                                className="engine-card"
                            >
                                <div className="engine-icon">
                                    <Icon />
                                </div>
                                <p className="panel-tag">{title}</p>
                                <h3>{copy}</h3>
                                <div className="engine-output">
                                    <ArrowDown size={16} />
                                    <span>{output}</span>
                                </div>
                            </Reveal>
                        )
                    })}
                </div>
                <p className="slide-footnote">{slide.footnote}</p>
            </div>
        )
    }

    if (slide.kind === 'timeline') {
        return (
            <div className="content-slide">
                <SlideHeader slide={slide} />
                <div className="timeline">
                    <div className="timeline-line" />
                    {slide.items?.map((item, index) => {
                        const [stage, time, copy] = item.split('|')
                        return (
                            <Reveal
                                key={stage}
                                delay={0.15 + index * 0.16}
                                className="timeline-stage"
                            >
                                <div className="timeline-dot" />
                                <span>{stage}</span>
                                <h3>{time}</h3>
                                <p>{copy}</p>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        )
    }

    if (slide.kind === 'flow') {
        return (
            <div className="content-slide">
                <SlideHeader slide={slide} />
                <div className="flow-row">
                    {slide.items?.map((item, index) => {
                        const Icon = [
                            Users,
                            MessageSquare,
                            BrainCircuit,
                            Target,
                        ][index]
                        return (
                            <div className="flow-part" key={item}>
                                <Reveal
                                    delay={0.12 + index * 0.14}
                                    className="flow-node"
                                >
                                    <Icon />
                                    <span>{item}</span>
                                </Reveal>
                                {index < (slide.items?.length ?? 0) - 1 && (
                                    <motion.div
                                        className="flow-arrow"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{
                                            delay: 0.24 + index * 0.14,
                                            duration: 0.5,
                                        }}
                                    >
                                        <ArrowRight />
                                    </motion.div>
                                )}
                            </div>
                        )
                    })}
                </div>
                <p className="slide-footnote">{slide.footnote}</p>
            </div>
        )
    }

    if (slide.kind === 'metrics' || slide.kind === 'survey') {
        return (
            <div className={`content-slide ${slide.kind}-slide`}>
                <SlideHeader slide={slide} />
                <div
                    className={`metric-grid metric-count-${slide.metrics?.length}`}
                >
                    {slide.metrics?.map((metric, index) => (
                        <Reveal
                            key={metric.value}
                            delay={0.12 + index * 0.12}
                            className="metric-block"
                        >
                            <strong>{metric.value}</strong>
                            <p>{metric.label}</p>
                        </Reveal>
                    ))}
                </div>
                <p className="slide-footnote">{slide.footnote}</p>
            </div>
        )
    }

    if (slide.kind === 'network') {
        return (
            <div className="content-slide network-slide">
                <SlideHeader slide={slide} />
                <div className="network-map">
                    <motion.div
                        className="network-core"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.12 }}
                    >
                        <Network />
                        <span>Realize+</span>
                    </motion.div>
                    {slide.items?.map((item, index) => {
                        const [group, names] = item.split('|')
                        return (
                            <Reveal
                                key={group}
                                delay={0.2 + index * 0.12}
                                className={`network-node network-${index}`}
                            >
                                <span>{group}</span>
                                <p>{names}</p>
                            </Reveal>
                        )
                    })}
                </div>
                <p className="slide-footnote">{slide.footnote}</p>
            </div>
        )
    }

    if (slide.kind === 'strategy') {
        return (
            <div className="content-slide strategy-slide">
                <SlideHeader slide={slide} />
                <div className="strategy-grid">
                    {slide.items?.map((item, index) => {
                        const Icon = iconMap[index]
                        return (
                            <Reveal
                                key={item}
                                delay={0.1 + index * 0.1}
                                className="strategy-item"
                            >
                                <Icon />
                                <p>{item}</p>
                            </Reveal>
                        )
                    })}
                </div>
                <Reveal delay={0.38} className="commentary-strip">
                    <Lightbulb />
                    <div>
                        <span>COMMENTARY</span>
                        <p>{slide.quote}</p>
                    </div>
                </Reveal>
                <p className="slide-footnote">{slide.footnote}</p>
            </div>
        )
    }

    if (slide.kind === 'publisher') {
        return (
            <div className="content-slide publisher-slide">
                <SlideHeader slide={slide} />
                <div className="publisher-layout">
                    <Reveal delay={0.12} className="answer-engine">
                        <Newspaper />
                        <p>{slide.body}</p>
                        <span>Questions answered inside publisher sites</span>
                    </Reveal>
                    <div className="publisher-metrics">
                        {slide.metrics?.map((metric, index) => (
                            <Reveal
                                key={metric.value}
                                delay={0.18 + index * 0.12}
                            >
                                <strong>{metric.value}</strong>
                                <span>{metric.label}</span>
                            </Reveal>
                        ))}
                    </div>
                </div>
                <Reveal delay={0.36} className="publisher-row">
                    {slide.items?.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </Reveal>
            </div>
        )
    }

    const isDiscussion = slide.kind === 'discussion'
    return (
        <div
            className={`content-slide ${isDiscussion ? 'discussion-slide' : ''}`}
        >
            <SlideHeader slide={slide} />
            <div className={isDiscussion ? 'discussion-grid' : 'takeaway-list'}>
                {slide.items?.map((item, index) => (
                    <Reveal
                        key={item}
                        delay={0.08 + index * 0.075}
                        className={
                            isDiscussion ? 'discussion-card' : 'takeaway-item'
                        }
                    >
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <p>{item}</p>
                        {isDiscussion && <MessageSquare size={20} />}
                    </Reveal>
                ))}
            </div>
        </div>
    )
}

export default function App() {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(1)
    const [notesOpen, setNotesOpen] = useState(false)
    const [overviewOpen, setOverviewOpen] = useState(false)
    const touchStart = useRef<number | null>(null)
    const slide = slides[current]

    const goTo = useCallback(
        (next: number) => {
            const clamped = Math.max(0, Math.min(slides.length - 1, next))
            setDirection(clamped >= current ? 1 : -1)
            setCurrent(clamped)
        },
        [current],
    )

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement)
            document.documentElement.requestFullscreen?.()
        else document.exitFullscreen?.()
    }, [])

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOverviewOpen(false)
                setNotesOpen(false)
                return
            }
            if (['ArrowRight', 'ArrowDown', ' '].includes(event.key)) {
                event.preventDefault()
                goTo(current + 1)
            }
            if (['ArrowLeft', 'ArrowUp'].includes(event.key)) goTo(current - 1)
            if (event.key === 'Home') goTo(0)
            if (event.key === 'End') goTo(slides.length - 1)
            if (event.key.toLowerCase() === 'n') setNotesOpen((value) => !value)
            if (event.key.toLowerCase() === 'f') toggleFullscreen()
            if (event.key.toLowerCase() === 'o')
                setOverviewOpen((value) => !value)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [current, goTo, toggleFullscreen])

    return (
        <main
            className="presentation"
            onTouchStart={(event) => {
                touchStart.current = event.touches[0].clientX
            }}
            onTouchEnd={(event) => {
                if (touchStart.current === null) return
                const delta =
                    event.changedTouches[0].clientX - touchStart.current
                if (Math.abs(delta) > 55) goTo(current + (delta < 0 ? 1 : -1))
                touchStart.current = null
            }}
        >
            <div className="grain" />
            <div className="top-rail">
                <div className="brand-mark">
                    <span /> OPEN WEB / 2026
                </div>
                <div className="presenter-chip">
                    <span>Presenting</span>
                    <strong>{slide.presenter}</strong>
                </div>
            </div>

            <AnimatePresence mode="wait" custom={direction}>
                <motion.section
                    key={slide.id}
                    className="slide-stage"
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 80, scale: 0.985 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: direction * -50, scale: 0.99 }}
                    transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                    aria-label={`Slide ${slide.id}: ${slide.title}`}
                >
                    <StandardSlide slide={slide} />
                </motion.section>
            </AnimatePresence>

            <div className="progress-track">
                <motion.div
                    animate={{
                        width: `${((current + 1) / slides.length) * 100}%`,
                    }}
                />
            </div>

            <nav className="controls" aria-label="Presentation controls">
                <button
                    onClick={() => goTo(current - 1)}
                    disabled={current === 0}
                    aria-label="Previous slide"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => goTo(current + 1)}
                    disabled={current === slides.length - 1}
                    aria-label="Next slide"
                >
                    <ChevronRight />
                </button>
                <span className="slide-count">
                    {String(current + 1).padStart(2, '0')} <i>/</i>{' '}
                    {slides.length}
                </span>
                <div className="control-spacer" />
                <button
                    className={notesOpen ? 'active' : ''}
                    onClick={() => setNotesOpen(!notesOpen)}
                    aria-label="Toggle speaker notes"
                >
                    <PanelRight />
                </button>
                <button
                    onClick={() => setOverviewOpen(true)}
                    aria-label="Open slide overview"
                >
                    <Grid2X2 />
                </button>
                <button
                    onClick={toggleFullscreen}
                    aria-label="Toggle fullscreen"
                >
                    <Expand />
                </button>
            </nav>

            <AnimatePresence>
                {notesOpen && (
                    <motion.aside
                        className="notes-panel"
                        initial={{ x: '105%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '105%' }}
                        transition={{ ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            onClick={() => setNotesOpen(false)}
                            aria-label="Close notes"
                        >
                            <X />
                        </button>
                        <p className="eyebrow">
                            Speaker notes · {slide.presenter}
                        </p>
                        <h3>{slide.title}</h3>
                        <p>{slide.notes}</p>
                        <span>Press N to toggle</span>
                    </motion.aside>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {overviewOpen && (
                    <motion.div
                        className="overview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <header>
                            <div>
                                <p className="eyebrow">Deck overview</p>
                                <h2>Choose a slide</h2>
                            </div>
                            <button
                                onClick={() => setOverviewOpen(false)}
                                aria-label="Close overview"
                            >
                                <X />
                            </button>
                        </header>
                        <div className="overview-grid">
                            {slides.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    className={
                                        index === current ? 'selected' : ''
                                    }
                                    onClick={() => {
                                        goTo(index)
                                        setOverviewOpen(false)
                                    }}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.02 }}
                                >
                                    <span>
                                        {String(item.id).padStart(2, '0')}
                                    </span>
                                    <p>{item.title}</p>
                                    <small>{item.presenter}</small>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}
