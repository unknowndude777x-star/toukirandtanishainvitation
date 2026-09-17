/**
 * Web Audio API based ambient music synthesizer
 * Generates an ethereal, calming acoustic harp / oriental modal progression
 * Soft, elegant, non-intrusive ambient soundscape.
 */

class AmbientMusicEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private masterGain: GainNode | null = null;

  private frequencies = [
    220.0, // A3
    246.94, // B3
    261.63, // C4
    293.66, // D4
    329.63, // E4
    349.23, // F4
    392.0, // G4
    440.0, // A4
    493.88, // B4
    523.25, // C5
  ];

  // Calming Hijaz/Bayati-tinged serene progression
  private melodicSequence = [
    [0, 2, 4, 7],
    [3, 5, 7, 9],
    [2, 4, 6, 8],
    [0, 3, 4, 7],
    [1, 4, 5, 8],
    [0, 2, 4, 6],
  ];
  private stepIndex = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playPluck(freq: number, delaySec: number, velocity: number = 0.08) {
    if (!this.ctx || !this.masterGain) return;

    const startTime = this.ctx.currentTime + delaySec;
    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Gentle warm acoustic tone
    osc.type = 'triangle';
    subOsc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);
    subOsc.frequency.setValueAtTime(freq * 0.5, startTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, startTime);
    filter.frequency.exponentialRampToValueAtTime(300, startTime + 2.5);

    // ADSR envelope - soft gentle harp/oud pluck
    gainNode.gain.setValueAtTime(0.0001, startTime);
    gainNode.gain.linearRampToValueAtTime(velocity, startTime + 0.04);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + 3.2);

    osc.connect(filter);
    subOsc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc.start(startTime);
    subOsc.start(startTime);
    osc.stop(startTime + 3.3);
    subOsc.stop(startTime + 3.3);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      this.isPlaying = true;
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 1.2);

      // Play immediate first chord
      this.tick();

      // Trigger chord progression every 3.6s
      this.intervalId = window.setInterval(() => {
        this.tick();
      }, 3600);
    } catch {
      // Audio context might fail on restricted environments
    }
  }

  private tick() {
    if (!this.isPlaying || !this.ctx) return;
    const chord = this.melodicSequence[this.stepIndex % this.melodicSequence.length];
    this.stepIndex++;

    chord.forEach((noteIdx, i) => {
      const freq = this.frequencies[noteIdx % this.frequencies.length];
      const delay = i * 0.22 + Math.random() * 0.05;
      this.playPluck(freq, delay, 0.07 - i * 0.01);
    });

    // Occasional gentle high chime
    if (Math.random() > 0.4) {
      const highFreq = this.frequencies[4] * 2;
      this.playPluck(highFreq, 0.9, 0.035);
    }
  }

  public stop() {
    if (!this.ctx || !this.masterGain) return;
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }
}

export const ambientMusic = new AmbientMusicEngine();
