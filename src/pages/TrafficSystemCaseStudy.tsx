import React, { useState, useEffect } from 'react';
import { NavLink } from '../context/RouterContext';
import { SystemBreadcrumb } from '../components/SystemBreadcrumb';
import { SYSTEM_PROJECTS } from '../data/projects';
import {
  Activity,
  Server,
  Layers,
  Shield,
  Zap,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Radio,
  Clock,
  Compass
} from 'lucide-react';

export const TrafficSystemCaseStudy: React.FC = () => {
  const project = SYSTEM_PROJECTS.find((p) => p.slug === 'traffic-system')!;
  
  // Interactive Chaos Failure Simulator State
  const [chaosRunning, setChaosRunning] = useState<boolean>(false);
  const [activeBrokerStatus, setActiveBrokerStatus] = useState<'HEALTHY' | 'PARTITIONED' | 'REBALANCING' | 'RECOVERED'>('HEALTHY');
  const [telemetryRate, setTelemetryRate] = useState<number>(10420);
  const [failoverSeconds, setFailoverSeconds] = useState<number>(1.82);
  const [chaosLog, setChaosLog] = useState<string[]>([
    'System operational: 10,000+ vehicle agents streaming GPS packets to Kafka topic partitions [geo_grid_01..08].',
    'Spatial stream workers computing 30-second rolling window velocity deltas.'
  ]);

  const triggerChaosDrill = () => {
    setChaosRunning(true);
    setActiveBrokerStatus('PARTITIONED');
    setChaosLog((prev) => [
      `[CHAOS DRILL INITIATED] Induced network partition on Kafka Broker-02 (Leader for Partitions 3, 7).`,
      `In-Sync Replicas (ISR) dropping from [1, 2, 3] to [1, 3]. min.insync.replicas=2 satisfied.`,
      ...prev
    ]);

    setTimeout(() => {
      setActiveBrokerStatus('REBALANCING');
      setChaosLog((prev) => [
        `[LEADER ELECTION] Partition 3 re-elected Broker-01 as leader in 420ms. Partition 7 re-elected Broker-03.`,
        `Consumer group [traffic-speed-aggregators] rebalance triggered without dropping uncommitted offsets.`,
        ...prev
      ]);

      setTimeout(() => {
        setActiveBrokerStatus('RECOVERED');
        setChaosRunning(false);
        setChaosLog((prev) => [
          `[CHAOS DRILL COMPLETED] Cluster fully stabilized in 1.82s. Packet delivery stability: 99.9%. Zero data loss verified.`,
          ...prev
        ]);
      }, 700);
    }, 800);
  };

  const resetChaosState = () => {
    setActiveBrokerStatus('HEALTHY');
    setChaosRunning(false);
    setChaosLog([
      'System reset to baseline steady state: 10,000+ vehicles emitting 100ms GPS updates.',
      'All 3 Kafka broker nodes reporting healthy ISR states.'
    ]);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header & Identity */}
      <div className="space-y-4 border-b border-[#1E293B] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
            <Activity className="w-4 h-4" />
            <span>SYS-03 // REAL-TIME DISTRIBUTED EVENT STREAM</span>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded border border-sky-500/30 text-sky-400 bg-sky-500/10">
            PRODUCTION VERIFIED
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          {project.name}
        </h1>
        <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
          {project.tagline}
        </p>

        {/* Top Key Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          {project.metrics.map((m, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#0D1322] border border-[#1E293B]">
              <div className="font-display text-2xl font-bold text-sky-400">{m.value}</div>
              <div className="text-xs font-mono text-slate-300 font-medium mt-0.5">{m.label}</div>
              {m.detail && <div className="text-[10px] text-slate-400 mt-1">{m.detail}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* 2. REAL-TIME EVENT STREAM PIPELINE */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <div className="text-xs font-mono text-sky-400 uppercase font-semibold">
              Event Topology // Stream Pipeline
            </div>
            <h2 className="font-display text-2xl font-bold text-white">
              Urban Telemetry to Adaptive Signal Actuation
            </h2>
          </div>
          <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Simulated Fleet: 10,000+ Emitters</span>
          </div>
        </div>

        {/* 5-Stage Event Pipeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          <div className="p-4 bg-[#0D1322] rounded-xl border border-[#1E293B] space-y-1.5">
            <div className="text-[10px] font-mono text-sky-400 uppercase">01. Fleet Ingress</div>
            <div className="text-xs font-bold text-white">10K+ GPS Emitters</div>
            <div className="text-[11px] text-slate-400">100ms interval UDP packets with velocity, heading, and GPS coordinates.</div>
          </div>

          <div className="p-4 bg-[#0D1322] rounded-xl border border-[#1E293B] space-y-1.5">
            <div className="text-[10px] font-mono text-sky-400 uppercase">02. Kafka Broker</div>
            <div className="text-xs font-bold text-white">Geohash Sharding</div>
            <div className="text-[11px] text-slate-400">Keyed by Geohash-6 prefixes ensuring spatial locality per partition.</div>
          </div>

          <div className="p-4 bg-[#0D1322] rounded-xl border border-[#1E293B] space-y-1.5">
            <div className="text-[10px] font-mono text-sky-400 uppercase">03. Go Workers</div>
            <div className="text-xs font-bold text-white">Rolling Windows</div>
            <div className="text-[11px] text-slate-400">30-sec sliding windows compute velocity deltas and spatial clustering.</div>
          </div>

          <div className="p-4 bg-[#0D1322] rounded-xl border border-[#1E293B] space-y-1.5">
            <div className="text-[10px] font-mono text-sky-400 uppercase">04. Redis State</div>
            <div className="text-xs font-bold text-white">Geospatial Index</div>
            <div className="text-[11px] text-slate-400">Atomic GEOADD enables sub-millisecond radius dispatch queries.</div>
          </div>

          <div className="p-4 bg-[#0D1322] rounded-xl border border-[#1E293B] space-y-1.5">
            <div className="text-[10px] font-mono text-sky-400 uppercase">05. Actuation</div>
            <div className="text-xs font-bold text-white">Adaptive Signals</div>
            <div className="text-[11px] text-slate-400">Real-time green light phase extension reducing intersection queue lag.</div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CHAOS DRILL & NODE FAILURE SIMULATOR */}
      <section className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] font-mono text-sky-300 uppercase">
              INTERACTIVE SIMULATION CONCEPT
            </div>
            <h2 className="font-display text-2xl font-bold text-white mt-1">
              3-Node Cluster Chaos Failover Drill
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Simulate dropping broker partition leaders under high-velocity streaming to verify automated failover and 99.9% packet stability.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={triggerChaosDrill}
              disabled={chaosRunning}
              className="px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-sky-600/20"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{chaosRunning ? 'Simulating Failure...' : 'Kill Broker Node (Chaos Drill)'}</span>
            </button>
            <button
              onClick={resetChaosState}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs"
              title="Reset state"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Broker Nodes Health Status Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-[#080C14] rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 font-bold">Kafka Broker 01</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                ONLINE
              </span>
            </div>
            <div className="text-[11px] text-slate-400">Assigned Partitions: 0, 1, 2, 6</div>
            <div className="text-[10px] font-mono text-slate-500">ISR Status: IN-SYNC (Ack=all)</div>
          </div>

          <div className={`p-4 bg-[#080C14] rounded-xl border transition-all space-y-2 ${
            activeBrokerStatus === 'PARTITIONED'
              ? 'border-rose-500 bg-rose-950/20'
              : activeBrokerStatus === 'REBALANCING'
              ? 'border-amber-500 bg-amber-950/20'
              : 'border-slate-800'
          }`}>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 font-bold">Kafka Broker 02</span>
              <span className={`flex items-center gap-1 font-semibold ${
                activeBrokerStatus === 'PARTITIONED'
                  ? 'text-rose-400'
                  : activeBrokerStatus === 'REBALANCING'
                  ? 'text-amber-400'
                  : 'text-emerald-400'
              }`}>
                {activeBrokerStatus === 'PARTITIONED' && 'TERMINATED / PARTITIONED'}
                {activeBrokerStatus === 'REBALANCING' && 'RE-ELECTING LEADER'}
                {(activeBrokerStatus === 'HEALTHY' || activeBrokerStatus === 'RECOVERED') && (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    ONLINE (LEADER)
                  </>
                )}
              </span>
            </div>
            <div className="text-[11px] text-slate-400">Assigned Partitions: 3, 7 (Primary)</div>
            <div className="text-[10px] font-mono text-slate-500">
              {activeBrokerStatus === 'PARTITIONED' ? 'Failover Time: < 2.0s' : 'ISR Status: IN-SYNC'}
            </div>
          </div>

          <div className="p-4 bg-[#080C14] rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 font-bold">Kafka Broker 03</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                ONLINE
              </span>
            </div>
            <div className="text-[11px] text-slate-400">Assigned Partitions: 4, 5</div>
            <div className="text-[10px] font-mono text-slate-500">ISR Status: IN-SYNC (Ack=all)</div>
          </div>
        </div>

        {/* Real-time Chaos Telemetry Log Output */}
        <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#060911]">
          <div className="px-4 py-2 bg-[#090D18] border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-sky-400" />
              telemetry_chaos_execution.log
            </span>
            <span className="text-emerald-400">Delivery Stability: 99.9%</span>
          </div>
          <div className="p-4 max-h-48 overflow-y-auto font-mono text-xs text-sky-200 space-y-1.5 leading-relaxed">
            {chaosLog.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-slate-600 select-none">&gt;</span>
                <span>{log}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VERIFIED BENCHMARKS TABLE */}
      <section className="space-y-4">
        <div>
          <div className="text-xs font-mono text-sky-400 uppercase font-semibold">Empirical Evidence</div>
          <h2 className="font-display text-2xl font-bold text-white">Stream Performance Benchmarks</h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#1E293B] bg-[#0D1322]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#090D18] text-slate-400 font-mono border-b border-[#1E293B]">
              <tr>
                <th className="py-3 px-4">Evaluation Dimension</th>
                <th className="py-3 px-4">Traffic System Result</th>
                <th className="py-3 px-4">Baseline Comparison</th>
                <th className="py-3 px-4">Metric Unit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300 font-sans">
              {project.deepDive.benchmarks.map((bench, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-semibold text-white">{bench.name}</td>
                  <td className="py-3 px-4 font-mono font-bold text-sky-400">{bench.value}</td>
                  <td className="py-3 px-4 text-slate-400">{bench.comparison}</td>
                  <td className="py-3 px-4 font-mono text-slate-500">{bench.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <SystemBreadcrumb currentSlug="traffic-system" />

    </div>
  );
};
