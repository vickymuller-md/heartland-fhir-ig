Profile: HeartlandRemoteMonitoringObservation
Parent: Observation
Id: heartland-remote-monitoring-observation
Title: "HEARTLAND Remote Monitoring Observation"
Description: "Observation captured via the HEARTLAND remote monitoring kit (Module 5): body weight, blood pressure (systolic/diastolic), or oxygen saturation. Red-flag thresholds are encoded via Observation.referenceRange with meaning.text identifying the rule. The weight and oxygen saturation values a program configures here are starting defaults, not HEARTLAND Protocol rules: weight gain >=2 lb (0.9 kg)/24h or >=5 lb (2.3 kg)/7d, and SpO2 <90% on room air, all configurable per program. Systolic BP <90 mmHg is the only blood pressure red flag; this guide states no diastolic threshold and no high systolic threshold. Per the human filter principle, all non-emergency alerts pass through licensed clinician telephone assessment before ED referral."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-remote-monitoring-observation"
* ^version = "0.2.0"
* ^status = #active
* ^experimental = false
* ^publisher = "Vicky Muller Ferreira, MD"

* status 1..1 MS
* category 1..* MS
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category contains vsCat 1..1 MS
* category[vsCat] = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs
* code 1..1 MS
* code from HeartlandMonitoringObservationCodeVS (extensible)
* subject 1..1 MS
* subject only Reference(HeartlandPatient or Patient)
* effective[x] 1..1 MS
* effective[x] only dateTime or Period
* value[x] 0..1 MS
* value[x] only Quantity
* device 0..1 MS
* device only Reference(Device)
* referenceRange 0..* MS
* referenceRange.low 0..1
* referenceRange.high 0..1
* referenceRange.text 0..1 MS
