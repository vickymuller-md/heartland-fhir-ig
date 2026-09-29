Profile: HeartlandCarePlan
Parent: CarePlan
Id: heartland-careplan
Title: "HEARTLAND Care Plan"
Description: "Draft planned-activity representation aligned with the HEARTLAND Toolkit V3.4 candidate. Facility tier describes delivery capacity, not clinical eligibility, treatment timing or exclusion of education domains. All eight educational domains are offered at every tier; format, sequence and support can differ. Planned activities are not evidence of professional review, completed teach-back, contact or care. Tier and monitoring-track extensions retain their existing identities. The profile does not encode the full operational journal."
* ^url = "https://fhir.heartlandprotocol.org/StructureDefinition/heartland-careplan"
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = true
* ^publisher = "Vicky Muller Ferreira, MD"

* extension contains
    HeartlandFacilityTier named facilityTier 0..1 MS and
    HeartlandMonitoringTrackExtension named monitoringTrack 0..1 MS

* status 1..1 MS
* intent 1..1 MS
* subject 1..1 MS
* subject only Reference(HeartlandPatient or Patient)
* period 0..1 MS
* addresses 0..* MS
* addresses only Reference(Condition)
* author 0..1 MS
* activity 1..* MS
* activity.detail.kind 0..1
* activity.detail.code 0..1
* activity.detail.status 1..1
* activity.detail.description 1..1 MS
* activity.detail.scheduledTiming 0..1 MS
* note 0..*
