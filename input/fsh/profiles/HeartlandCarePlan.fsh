Profile: HeartlandCarePlan
Parent: CarePlan
Id: heartland-careplan
Title: "HEARTLAND Care Plan"
Description: "Heart failure care plan structured per HEARTLAND Protocol v3.2. Activities are organized around five domains: GDMT initiation/titration, remote monitoring schedule, post-discharge follow-up (calls and visits), discharge education (3 condensed or 8 comprehensive domains), and patient assistance navigation. Two extensions identify the facility implementation tier and the assigned monitoring track (A digital / B analog)."
* ^url = "https://heartlandprotocol.org/fhir/StructureDefinition/heartland-careplan"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
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
